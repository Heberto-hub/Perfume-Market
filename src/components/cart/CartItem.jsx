import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../common/Button';
import './CartItem.css';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    updateQuantity(item.id, parseInt(event.target.value));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Precio: ${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>
      </div>
      <Button onClick={() => removeFromCart(item.id)} className="remove-button">Eliminar</Button>
    </div>
  );
}

export default CartItem;