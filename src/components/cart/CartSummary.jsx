import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import './CartSummary.css'; // Importa los estilos del resumen del carrito

function CartSummary() {
  const { getTotalPrice, clearCart, cart } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-summary">
      <h3>Resumen del Carrito</h3>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <div className="cart-actions">
        <Button onClick={clearCart} className="clear-cart">Vaciar Carrito</Button>
        {cart.length > 0 && (
          <Link to="/checkout"> {/* Asegúrate de tener una ruta para el checkout */}
            <Button className="checkout">Finalizar Compra</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartSummary;