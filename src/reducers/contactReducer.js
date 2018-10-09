import { GET_CONTACTS } from "../actions/types";
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
        default:
            return state;
    }
}
