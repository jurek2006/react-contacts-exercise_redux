import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export class FormGroup extends Component {
    render() {
        const {
            name,
            label,
            type,
            placeholder,
            value,
            onChange,
            errorMessage,
            errors
        } = this.props;
        return (
            <div className="formGroup mb-3">
                <label className="mb-0" htmlFor={name}>
                    {label}
                </label>
                <input
                    //if there is error for given field in errors
                    //for example: field firstName checks if there is errors.firstName === true - then adds class is-invalid and renders div.invalid-feedback
                    className={classnames("form-control", {
                        "is-invalid": errors[name]
                    })}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {errors[name] && (
                    <div className="invalid-feedback">{errorMessage}</div>
                )}
            </div>
        );
    }
}

FormGroup.defaultProps = {
    type: "text"
};

FormGroup.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FormGroup;
