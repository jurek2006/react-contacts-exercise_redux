import React, { Component } from "react";
import { Contact } from "./Contact";
import { Consumer } from "../context";

export class Contacts extends Component {
    renderContactsList() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <ul>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </ul>
                    );
                }}
            </Consumer>
        );
    }

    render() {
        return (
            <div>
                <h1>Kontakty:</h1>
                {this.renderContactsList()}
            </div>
        );
    }
}

export default Contacts;
