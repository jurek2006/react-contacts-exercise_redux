import React, { Component } from "react";
import { connect } from "react-redux";
import { editContact } from "../actions/contactActions";
import PropTypes from "prop-types";
import FormGroup from "./FormGroup";
import { Link } from "react-router-dom";

export class EditContact extends Component {
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

    handleCancel() {
        this.setState(this.emptyFormState);
        this.props.history.push("/");
    }

    handleSubmit(e) {
        e.preventDefault();
        const { errors, ...fields } = this.state; //destructing to have fiels from state, without errors
        if (this.validateForm(fields, errors)) {
            // if pasess validation with no errors
            this.props.editContact(fields);
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

    componentDidMount() {
        const id = this.props.match.params.id; //parameter got from url
        // set state of the component to contact data for contact which matches given id (and add empty errors)
        const contactToEdit = this.props.contacts.find(
            contact => contact.id === id
        );
        if (contactToEdit) {
            // if contact with given id found set its properties to state of the component
            this.setState({
                ...contactToEdit,
                errors: {}
            });
        } else {
            // if there is no contact with given id set errors.contactNotFound to true
            this.setState({ errors: { contactNotFound: true } });
        }
    }

    render() {
        const { firstName, lastName, email, phone, city, errors } = this.state;
        return (
            <React.Fragment>
                {errors.contactNotFound && (
                    <div className="card m-3">
                        <h2 className="card-header bg-danger">
                            Kontakt nie istnieje
                        </h2>
                        <div className="card-body">
                            <p> Niestety kontakt o zadanym id nie istnieje.</p>
                            <Link className="btn btn-secondary" to="/">
                                Przejdź do listy kontaktów
                            </Link>
                        </div>
                    </div>
                )}

                {!errors.contactNotFound && (
                    <div className="card m-3">
                        <h2 className="card-header bg-danger">
                            Edytuj kontakt
                        </h2>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit.bind(this)}>
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
                                        value="Zapisz kontakt"
                                        className="btn btn-success mx-1"
                                    />
                                    <input
                                        onClick={this.handleCancel.bind(this)}
                                        type="button"
                                        className="btn btn-secondary"
                                        value="Anuluj"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

EditContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    editContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ contacts: state.contact.contacts });

export default connect(
    mapStateToProps,
    { editContact }
)(EditContact);
