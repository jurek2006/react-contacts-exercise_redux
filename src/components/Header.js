import React, { Component } from "react";
import { Consumer } from "../context";

export class Header extends Component {
    handleAddContactClick(dispatch) {
        dispatch({ type: "SHOW_HIDE_ADD_CONTACT_VIEW", payload: true });
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, addContactVisible } = value;
                    return (
                        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                            <div className="container">
                                <a href="/" className="navbar-brand">
                                    {this.props.text}
                                </a>
                                <div>
                                    <ul className="navbar-nav mr-auto">
                                        <button
                                            className="btn btn-outline-light m-2"
                                            disabled={addContactVisible}
                                            onClick={this.handleAddContactClick.bind(
                                                this,
                                                dispatch
                                            )}
                                        >
                                            <i className="fas fa-plus-circle fa-fw" />
                                            Dodaj kontakt
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    );
                }}
            </Consumer>
        );
    }
}

export default Header;
