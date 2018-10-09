import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../actions/contactActions";

export class Contacts extends Component {
    renderContactsList(contacts) {
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <div className="card m-3">
                    <h1 className="card-header bg-danger">Kontakty</h1>
                    <div className="card-body">
                        {this.renderContactsList(contacts)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ contacts: state.contact.contacts });

export default connect(
    mapStateToProps,
    { getContacts }
)(Contacts);
