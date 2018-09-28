import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormGroup extends Component {
    render() {
        return (
            <div className="formGroup">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    className="form-control"
                    name={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
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
