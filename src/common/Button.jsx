import React from "react";

const Button = ({
  isActive,
  draggable,
  name,
  children,
  className,
  text,
  onClick,
  onDragStart,
}) => {
  return (
    <button
      className={`${className} ${isActive ? "active" : ""}`}
      type="button"
      name={name}
      id={name}
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
    >
      {text} {children}
    </button>
  );
};

export default Button;
