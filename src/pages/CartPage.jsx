import React from 'react';
import CartList from '../components/cart/CartList';
import CartSummary from '../components/cart/CartSummary';
import './CartPage.css';

function CartPage() {
  return (
    <div className="cart-page">
      <h2>Tu Carrito de Compras</h2>
      <CartList />
      <CartSummary />
      {/* Opcional: Mensaje de carrito vacío */}
      {/* <p className="empty-cart-message">Tu carrito está vacío. ¡Explora nuestros perfumes!</p> */}
    </div>
  );
}

export default CartPage;