import React, { Component } from "react";
import { Consumer } from "../context";

export class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "Jurek",
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
                                        {/* ZREFAKTORYZOWAĆ POLA FORMULARZA */}
                                        <div className="formGroup">
                                            <label htmlFor="firstName">
                                                Imię:
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                placeholder="Podaj imię"
                                                value={this.state.firstName}
                                                onChange={this.handleFieldValueChange.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="lastName">
                                                Nazwisko:
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="form-control"
                                                placeholder="Podaj nazwisko"
                                                value={this.state.lastName}
                                                onChange={this.handleFieldValueChange.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="email">
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Podaj email"
                                                value={this.state.email}
                                                onChange={this.handleFieldValueChange.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="phone">
                                                Numer telefonu:
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Podaj numer telefonu"
                                                value={this.state.phone}
                                                onChange={this.handleFieldValueChange.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="city">
                                                Miejscowość:
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                placeholder="Podaj miejscowość"
                                                value={this.state.city}
                                                onChange={this.handleFieldValueChange.bind(
                                                    this
                                                )}
                                            />
                                        </div>
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
