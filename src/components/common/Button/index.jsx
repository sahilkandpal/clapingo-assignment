import React from 'react'
import "./button.css";

function Button({type="primary", variant="contained", size="md", children, className}) {
  return (
    <button className={`clapingo_btn ${type} ${variant} ${size} ${className}`}>{children}</button>
  );
}

export default Button;