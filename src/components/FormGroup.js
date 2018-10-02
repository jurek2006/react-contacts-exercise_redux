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
            error
        } = this.props;
        return (
            <div className="formGroup">
                <label htmlFor={name}>{label}</label>
                <input
                    className={classnames("form-control", {
                        "is-invalid": error
                    })}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
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
