import React, { useContext } from 'react';
import ProductList from '../components/product/ProductList';
import { CartContext } from '../contexts/CartContext';
import './HomePage.css';

function HomePage() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home-page">
      <h2>La Elegancia en Cada Gota: Nuestros Perfumes Exquisitos.</h2>
      <p className="home-intro">Despierta tus Sentidos, Define tu Presencia con Fragancias Exclusivas.</p>
      <ProductList onAddToCart={addToCart} />
    </div>
  );
}

export default HomePage;