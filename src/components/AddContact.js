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
        this.props.history.push("/");
    }

    handleSubmit(dispatch, e) {
        e.preventDefault();
        const { errors, ...fields } = this.state; //destructing to have fiels from state, without errors
        if (this.validateForm(fields, errors)) {
            // if pasess validation with no errors
            dispatch({ type: "ADD_CONTACT", payload: fields });
            this.setState(this.emptyFormState);
            this.props.history.push("/");
        }
    }

    handleFieldValueChange(e) {
        this.setState({ [e.target.name]: e.target.value }); //change field's value
        const { errors } = this.state;
        if (errors[e.target.name] && e.target.value.trim().length > 0) {
            // if there was already error for this field and now field's value is not empty - get rid of this error
            const { ...newErrors } = errors;
            delete newErrors[e.target.name];
            this.setState({ errors: newErrors });
        }
    }

    validateForm(fields) {
        // validates fields and returs true if every field is ok
        // retutns false and sets errors in state when any empty field value found
        let errors = {};

        // iterates over each field in fields - if field's value is empty adds error (for example: for field named firstName puts true in errors.firstName)
        Object.entries(fields).forEach(([field, value]) => {
            if (value.trim().length < 1) {
                errors = { ...errors, [field]: true };
            }
        });
        this.setState({ errors });
        return !Object.keys(errors).length > 0; //returns false if there's at least one error
    }
    render() {
        const { firstName, lastName, email, phone, city, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
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
                                        errors={errors}
                                        errorMessage="Nie podano imienia"
                                    />
                                    <FormGroup
                                        label="Nazwisko"
                                        name="lastName"
                                        placeholder="Podaj nazwisko"
                                        value={lastName}
                                        onChange={this.handleFieldValueChange.bind(
                                            this
                                        )}
                                        errors={errors}
                                        errorMessage="Nie podano nazwiska"
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
                                        errors={errors}
                                        errorMessage="Nie podano adresu email"
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
                                        errors={errors}
                                        errorMessage="Nie podano numeru telefonu"
                                    />
                                    <FormGroup
                                        label="Miejscowość"
                                        name="city"
                                        placeholder="Podaj miejscowość zamieszkania"
                                        value={city}
                                        onChange={this.handleFieldValueChange.bind(
                                            this
                                        )}
                                        errors={errors}
                                        errorMessage="Nie podano miasta"
                                    />
                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            value="Dodaj kontakt"
                                            className="btn btn-success mx-1"
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
                                    </div>
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
