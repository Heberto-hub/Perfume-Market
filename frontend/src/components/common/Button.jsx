import React from 'react';
import './Button.css';

function Button({ children, onClick, className, type = 'button' }) {
  return (
    <button type={type} className={`button ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;