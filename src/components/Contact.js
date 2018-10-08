import React, { Component } from "react";
import { Consumer } from "../context";
import classnames from "classnames";

export class Contact extends Component {
    state = {
        showContactInfo: false
    };

    handleDeleteContact(id, dispatch) {
        dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
            city,
            id
        } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <h2 className="card-header">
                                {firstName} {lastName}{" "}
                                <i
                                    className={classnames("", {
                                        "fas fa-caret-down": !showContactInfo,
                                        "fas fa-caret-up": showContactInfo
                                    })}
                                    onClick={() =>
                                        this.setState({
                                            showContactInfo: !showContactInfo
                                        })
                                    }
                                    style={{
                                        cursor: "pointer"
                                    }}
                                />
                                <i
                                    className="fas fa-times"
                                    onClick={this.handleDeleteContact.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                    style={{
                                        cursor: "pointer",
                                        float: "right"
                                    }}
                                />
                            </h2>
                            {showContactInfo && (
                                <div className="card-body">
                                    <p>
                                        <span className="form__label">
                                            Imię i nazwisko:{" "}
                                        </span>
                                        {firstName} {lastName}
                                    </p>
                                    <p>
                                        <span className="form__label">
                                            Adres email:{" "}
                                        </span>
                                        {email}
                                    </p>
                                    <p>
                                        <span className="form__label">
                                            Nr telefonu:{" "}
                                        </span>
                                        {phone}
                                    </p>
                                    <p>
                                        <span className="form__label">
                                            Miejscowość:{" "}
                                        </span>
                                        {city}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contact;
