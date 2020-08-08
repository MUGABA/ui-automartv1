import React from "react";

function TextInput({ name, label, ...otherProps }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...otherProps} id={name} name={name} className="form-control" />
    </div>
  );
}

export default TextInput;
