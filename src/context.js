import React, { Component } from "react";
import uuid from "uuid";
const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        default:
            return state;
    }
};

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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
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
