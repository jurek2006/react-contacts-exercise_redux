import React, { Component } from "react";

export class Contact extends Component {
    render() {
        const { firstName, lastName, email, phone, city } = this.props.contact;
        return (
            <li>
                {firstName} {lastName} {email} {phone} {city}
            </li>
        );
    }
}

export default Contact;
