import React from "react";

import TextInput from "./reUsableComponents/imputComponent";
import Button from "./reUsableComponents/buttonComponent";

function LoginForm() {
  return (
    <div>
      <h1>Login Here</h1>
      <form action="">
        <TextInput
          type="email"
          label="Email"
          name="Email"
          placeHolder="Enter email you used to sign up here"
        />
        <TextInput
          type="password"
          label="Password"
          name="Password"
          placeHolder="Enter password you used to sign up here"
        />
        <Button action="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
