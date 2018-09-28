import React, { Component } from "react";
import { Consumer } from "../context";
import { FormGroup } from "./FormGroup";

export class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: ""
        };
    }

    handleCancel(dispatch) {
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT", payload: false });
    }

    handleSubmit(dispatch, e) {
        e.preventDefault();
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT", payload: false });
    }

    handleFieldValueChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { firstName, lastName, email, phone, city } = this.state;
        return (
            <Consumer>
                {value => {
                    const { addContactVisible, dispatch } = value;
                    if (addContactVisible)
                        return (
                            <div className="card m-3">
                                <h2 className="card-header bg-danger">
                                    Dodaj kontakt
                                </h2>
                                <div className="card-body">
                                    <form
                                        onSubmit={this.handleSubmit.bind(
                                            this,
                                            dispatch
                                        )}
                                    >
                                        <FormGroup
                                            label="Imię"
                                            name="firstName"
                                            placeholder="Podaj imię"
                                            value={firstName}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                        />
                                        <FormGroup
                                            label="Nazwisko"
                                            name="lastName"
                                            placeholder="Podaj nazwisko"
                                            value={lastName}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                        />
                                        <FormGroup
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="Podaj email"
                                            value={email}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                        />
                                        <FormGroup
                                            label="Telefon"
                                            name="phone"
                                            type="tel"
                                            placeholder="Podaj numer telefonu"
                                            value={phone}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                        />
                                        <FormGroup
                                            label="Miejscowość"
                                            name="city"
                                            placeholder="Podaj miejscowość zamieszkania"
                                            value={city}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                        />
                                        <input
                                            type="submit"
                                            value="Dodaj kontakt"
                                            className="btn btn-success"
                                        />
                                        <input
                                            onClick={this.handleCancel.bind(
                                                this,
                                                dispatch
                                            )}
                                            type="button"
                                            className="btn btn-secondary"
                                            value="Anuluj"
                                        />
                                    </form>
                                </div>
                            </div>
                        );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
