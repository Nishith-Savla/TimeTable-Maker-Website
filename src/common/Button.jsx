import React from "react";

const Button = ({ name, text, onClick }) => {
  return (
    <button type="button" name={name} id={name} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
