import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    contacts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ contacts: state.contact.contacts });

export default connect(mapStateToProps)(Contacts);
