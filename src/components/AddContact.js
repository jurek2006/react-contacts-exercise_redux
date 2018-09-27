import React, { Component } from "react";
import { Consumer } from "../context";

export class AddContact extends Component {
    handleCancel(dispatch) {
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
                                <p>Dodawanie</p>
                                <button
                                    onClick={this.handleCancel.bind(
                                        this,
                                        dispatch
                                    )}
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    Anuluj
                                </button>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
