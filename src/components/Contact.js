import React, { Component } from "react";
import { Consumer } from "../context";

export class Contact extends Component {
    handleDeleteContact(id, dispatch) {
        dispatch({ type: "DELETE_CONTACT", payload: id });
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
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <li>
                            {firstName} {lastName} {email} {phone} {city}{" "}
                            <i
                                className="fas fa-times"
                                onClick={this.handleDeleteContact.bind(
                                    this,
                                    id,
                                    dispatch
                                )}
                            />
                        </li>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contact;
