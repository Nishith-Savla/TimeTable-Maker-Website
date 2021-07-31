import React from "react";

const Button = ({ isActive, name, children, className, text, onClick }) => {
  return (
    <button
      className={`${className} ${isActive ? "active" : ""}`}
      type="button"
      name={name}
      id={name}
      onClick={onClick}
    >
      {text} {children}
    </button>
  );
};

export default Button;
