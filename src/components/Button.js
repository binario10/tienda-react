import React from "react";
import "../styles/button.css";

const Button = ({ label, onClick, className = "" }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
