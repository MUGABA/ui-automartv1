import React from "react";
import Joi from "joi-browser";
import FormAttributes from "./reUsableComponents/formComponent";

class SighUp extends FormAttributes {
  state = {
    data: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      address: "",
      contact: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.string().required(),
  };
  doSubmit() {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderTextInput("email", "Email", "email")}
        {this.renderTextInput("first_name", "FirstName")}
        {this.renderTextInput("last_name", "LastName")}
        {this.renderTextInput("password", "Password", "password")}
        {this.renderTextInput("address", "Address")}
        {this.renderTextInput("contact", "Contact")}
        {this.renderButton("SignUp")}
      </form>
    );
  }
}

export default SighUp;
