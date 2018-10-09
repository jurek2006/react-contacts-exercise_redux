import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {this.props.text}
                    </Link>
                    <div>
                        <div className="navbar-nav mr-auto">
                            <NavLink
                                to="/"
                                exact
                                className="btn btn-outline-light m-2"
                            >
                                <i className="fas fa-users fa-fw" /> Kontakty
                            </NavLink>
                            <NavLink
                                to="/contact/add"
                                className="btn btn-outline-light m-2"
                            >
                                <i className="fas fa-plus-circle fa-fw" /> Dodaj
                                kontakt
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="btn btn-outline-light m-2"
                            >
                                <i className="fas fa-question-circle fa-fw" /> O
                                programie
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
