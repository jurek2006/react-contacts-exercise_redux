import React, { Component } from "react";
import { Contact } from "./Contact";
import { Consumer } from "../context";

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
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
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
