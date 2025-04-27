import React from 'react';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Perfume Market</div> {/* Reemplaza con tu logo */}
      <NavigationBar />
    </header>
  );
}

export default Header;