import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT
} from "../actions/types";
import uuid from "uuid";

const initialState = {
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

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts.filter(
                        contact => contact.id !== action.payload.id
                    )
                ]
            };
        default:
            return state;
    }
}
