import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (perfume) => {
    const existingItem = cart.find(item => item.id === perfume.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === perfume.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...perfume, quantity: 1 }]);
    }
  };

  const removeFromCart = (perfumeId) => {
    setCart(cart.filter(item => item.id !== perfumeId));
  };

  const updateQuantity = (perfumeId, quantity) => {
    setCart(cart.map(item =>
      item.id === perfumeId ? { ...item, quantity: parseInt(quantity, 10) } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};