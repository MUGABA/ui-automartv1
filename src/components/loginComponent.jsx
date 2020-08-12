import React from "react";
// import { Redirect } from "react-router-dom";
import Joi from "joi-browser";

import FormAttributes from "./reUsableComponents/formComponent";

class LoginForm extends FormAttributes {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit() {
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : "/";
  }

  render() {
    return (
      <div>
        <h1>Login Here</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextInput("email", "Email")}
          {this.renderTextInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
