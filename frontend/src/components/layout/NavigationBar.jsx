import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { CartContext } from '../../contexts/CartContext';

function NavigationBar() {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();

  return (
    <nav className="navigation-bar" aria-label="Menú principal">
      <ul>
        <li><Link to="/" aria-label="Ir a la página de inicio">Inicio</Link></li>
        <li><Link to="/products" aria-label="Ver todos los productos">Productos</Link></li>
        <li className="cart-link-container">
          <Link to="/cart" aria-label="Ver el carrito de compras">
            Carrito
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </li>
        <li><Link to="/login" aria-label="Iniciar sesión">Login</Link></li>
        <li><Link to="/register" aria-label="Registrarse">Register</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;