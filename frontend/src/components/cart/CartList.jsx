import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './CartList.css';

function CartList() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-list">
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}

export default CartList;