import React, { Component } from "react";
import uuid from "uuid";
const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                firstName: "Franek",
                lastName: "Dolas",
                email: "franek@dolas.pl",
                phone: "111111111",
                city: "Warszawa",
                id: uuid()
            },
            {
                firstName: "Grzegorz",
                lastName: "Brzęczyszczykiewicz",
                phone: "222222222",
                email: "gr@dolas.pl",
                city: "Łękołoty Wielkie",
                id: uuid()
            }
        ]
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
