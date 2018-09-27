import React, { Component } from "react";
import { Contact } from "./Contact";
import { Consumer } from "../context";
import { AddContact } from "./AddContact";

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
                    const { contacts, addContactVisible } = value;
                    return (
                        <React.Fragment>
                            {addContactVisible && <AddContact />}

                            <div className="card m-3">
                                <h1 className="card-header bg-danger">
                                    Kontakty
                                </h1>
                                <div className="card-body">
                                    {this.renderContactsList(contacts)}
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
