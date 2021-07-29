import React from "react";

const Button = ({ name, children, className, text, onClick }) => {
  return (
    <div className={className}>
      <button
        style={{ background: "transparent" }}
        type="button"
        name={name}
        id={name}
        onClick={onClick}
      >
        {text}
      </button>
      {children}
    </div>
  );
};

export default Button;
