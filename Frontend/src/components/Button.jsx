import React from "react";

function Button({
  type = "submit",
  className = "",
  text = "button",
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
