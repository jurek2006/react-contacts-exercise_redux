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
        case "SHOW_HIDE_ADD_CONTACT_VIEW":
            return {
                ...state,
                addContactVisible: action.payload
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    { ...action.payload, id: uuid() }
                ],
                addContactVisible: false
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
        addContactVisible: false,
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
