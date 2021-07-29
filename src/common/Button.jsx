import React from "react";

const Button = ({ name, children, className, text, onClick }) => {
  return (
    <button
      className={className}
      type="button"
      name={name}
      id={name}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
