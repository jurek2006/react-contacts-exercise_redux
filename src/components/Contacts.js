import React, { Component } from "react";
import { Contact } from "./Contact";
import { Consumer } from "../context";

export class Contacts extends Component {
    renderContactsList(contacts) {
        return (
            <ul>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </ul>
        );
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <div>
                            <h1>Kontakty:</h1>
                            {this.renderContactsList(contacts)}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
