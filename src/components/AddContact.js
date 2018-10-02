import React, { Component } from "react";
import { Consumer } from "../context";
import { FormGroup } from "./FormGroup";

export class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = this.emptyFormState;
    }

    emptyFormState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        errors: {}
    };

    handleCancel(dispatch) {
        this.setState(this.emptyFormState);
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT_VIEW", payload: false });
    }

    handleSubmit(dispatch, e) {
        e.preventDefault();
        if (this.validateForm()) {
            // if pasess validation with no errors
            const { errors, ...fields } = this.state; //destructing to have fiels from state, without errors
            dispatch({ type: "ADD_CONTACT", payload: fields });
            this.setState(this.emptyFormState);
        }
    }

    handleFieldValueChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateForm() {
        const { firstName, lastName, email, phone, city } = this.state;
        let errors = {};

        if (firstName.trim().length < 1) {
            errors = { ...errors, firstName: "Nie podano imienia" };
        }
        if (lastName.trim().length < 1) {
            errors = { ...errors, lastName: "Nie podano nazwiska" };
        }
        if (email.trim().length < 1) {
            errors = { ...errors, email: "Nie podano email" };
        }
        if (phone.trim().length < 1) {
            errors = { ...errors, phone: "Nie podano nr telefonu" };
        }
        if (city.trim().length < 1) {
            errors = { ...errors, city: "Nie podano miasta" };
        }
        this.setState({ errors });
        return !Object.keys(errors).length > 0; //returns false if there's at least one error
    }
    render() {
        const { firstName, lastName, email, phone, city, errors } = this.state;
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
                                            error={errors.firstName}
                                        />
                                        <FormGroup
                                            label="Nazwisko"
                                            name="lastName"
                                            placeholder="Podaj nazwisko"
                                            value={lastName}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                            error={errors.lastName}
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
                                            error={errors.email}
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
                                            error={errors.phone}
                                        />
                                        <FormGroup
                                            label="Miejscowość"
                                            name="city"
                                            placeholder="Podaj miejscowość zamieszkania"
                                            value={city}
                                            onChange={this.handleFieldValueChange.bind(
                                                this
                                            )}
                                            error={errors.city}
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
