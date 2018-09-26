import React, { Component } from "react";

export class Contact extends Component {
    render() {
        const { firstName, lastName, email, phone, city } = this.props.contact;
        return (
            <li>
                {firstName} {lastName} {email} {phone} {city}{" "}
                <i className="fas fa-times" />
            </li>
        );
    }
}

export default Contact;
