const Button = ({
  isActive,
  draggable,
  name,
  children,
  className,
  text,
  onClick,
  onKeyUp,
  onDragStart,
  contentEditable,
  onInput,
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
      onKeyUp={onKeyUp}
      contentEditable={contentEditable}
      onInput={onInput}
    >
      {text} {children}
    </button>
  );
};

export default Button;
