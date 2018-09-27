import React, { Component } from "react";
import { Consumer } from "../context";

export class AddContact extends Component {
    handleCancel(dispatch) {
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT", payload: false });
    }

    handleSubmit(dispatch, e) {
        e.preventDefault();
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT", payload: false });
    }
    render() {
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
                                    <div className="formGroup">
                                        <label htmlFor="firstName">Imię:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="Podaj imię"
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
                                        />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Podaj email"
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
