import React from "react";

import TextInput from "./reUsableComponents/imputComponent";
import Button from "./reUsableComponents/buttonComponent";

function SighUp() {
  return (
    <div>
      <h1>You do not have an account register here</h1>
      <p>Do you and to check the available cars continue</p>
      <form>
        <TextInput
          name="Email"
          label="Email"
          type="email"
          placeHolder="Enter your email here "
        />
        <TextInput
          name="FirstName"
          label="Firstname"
          type="text"
          placeHolder="Enter your first name"
        />
        <TextInput
          name="lastname"
          label="lastname"
          type="text"
          placeHolder="Enter your last name"
        />
        <TextInput
          name="password"
          label="Password"
          type="password"
          placeHolder="enter your password here"
        />
        <TextInput
          name="address"
          label="Address"
          type="text"
          placeHolder="Please write your address here"
        />
        <Button action="Register" />
      </form>
    </div>
  );
}

export default SighUp;
