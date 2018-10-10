import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../actions/contactActions";
import { Link } from "react-router-dom";

export class Contact extends Component {
    state = {
        showContactInfo: false
    };

    handleDeleteContact(id) {
        this.props.deleteContact(id);
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
            city,
            id
        } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <div className="card mb-3">
                <h2 className="card-header">
                    {firstName} {lastName}{" "}
                    <i
                        className={classnames("", {
                            "fas fa-caret-down": !showContactInfo,
                            "fas fa-caret-up": showContactInfo
                        })}
                        onClick={() =>
                            this.setState({
                                showContactInfo: !showContactInfo
                            })
                        }
                        style={{
                            cursor: "pointer"
                        }}
                    />
                    <i
                        className="fas fa-times"
                        onClick={this.handleDeleteContact.bind(this, id)}
                        style={{
                            cursor: "pointer",
                            float: "right"
                        }}
                    />
                    <Link to={`/contact/edit/${id}`}>
                        <i
                            className="fas fa-edit"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                marginRight: "1rem"
                            }}
                        />
                    </Link>
                </h2>
                {showContactInfo && (
                    <div className="card-body">
                        <p>
                            <span className="form__label">
                                Imię i nazwisko:{" "}
                            </span>
                            {firstName} {lastName}
                        </p>
                        <p>
                            <span className="form__label">Adres email: </span>
                            {email}
                        </p>
                        <p>
                            <span className="form__label">Nr telefonu: </span>
                            {phone}
                        </p>
                        <p>
                            <span className="form__label">Miejscowość: </span>
                            {city}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteContact }
)(Contact);
