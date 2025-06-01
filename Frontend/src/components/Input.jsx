import React from "react";

function Input({
  type = "text",
  value,
  onChange,
  className = "",
  placeholder = "",
  required,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
