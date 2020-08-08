import React from "react";

function Button({ action }) {
  return (
    <button type="button" className="btn btn-primary">
      {action}
    </button>
  );
}

export default Button;
