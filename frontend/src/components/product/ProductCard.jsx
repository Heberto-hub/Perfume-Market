import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';
import { CartContext } from '../../contexts/CartContext';
import './ProductCard.css';

function ProductCard({ perfume }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(perfume);
    alert(`${perfume.name} ha sido añadido al carrito.`);
  };

  return (
    <div className="product-card">
      <img src={perfume.image} alt={perfume.name} className="product-image" />
      <div className="product-info">
        <h3>{perfume.name}</h3>
        <p className="product-brand">{perfume.brand}</p>
        <p className="product-price">${perfume.price.toFixed(2)}</p>
        <RatingStars rating={perfume.rating} size="small" />
        <div className="product-actions">
          <Link to={`/product/${perfume.id}`}>
            <Button>Ver Detalles</Button>
          </Link>
          <Button onClick={handleAddToCart}>
            Añadir al Carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;