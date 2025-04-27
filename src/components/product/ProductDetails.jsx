import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import perfumesData from '../../data/perfumes';
import RatingStars from '../common/RatingStars';
import ReviewList from '../review/ReviewList';
import AddReviewForm from '../review/AddReviewForm';
import Button from '../common/Button';
import { CartContext } from '../../contexts/CartContext';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [perfume, setPerfume] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundPerfume = perfumesData.find(p => p.id === parseInt(id));
    setPerfume(foundPerfume);
  }, [id]);

  const handleAddToCart = () => {
    if (perfume) {
      addToCart(perfume);
      alert(`${perfume.name} ha sido añadido al carrito.`);
    }
  };

  const handleReviewAdded = (productId, newReview) => {
    setPerfume(prevPerfume => {
      if (prevPerfume && prevPerfume.id === productId) {
        return { ...prevPerfume, reviews: [...prevPerfume.reviews, newReview] };
      }
      return prevPerfume;
    });
  };

  if (!perfume) {
    return <div>Cargando detalles...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-header">
        <img src={perfume.image} alt={perfume.name} className="product-image-detail" />
        <div className="product-info-detail">
          <h2>{perfume.name}</h2>
          <p className="product-brand">{perfume.brand}</p>
          <RatingStars rating={perfume.rating} size="large" />
          <p className="product-price">${perfume.price.toFixed(2)}</p>
          <p className="product-description">{perfume.description}</p>
          <Button onClick={handleAddToCart}>Añadir al Carrito</Button>
        </div>
      </div>
      <ReviewList reviews={perfume.reviews} />
      <AddReviewForm productId={perfume.id} onReviewAdded={handleReviewAdded} />
    </div>
  );
}

export default ProductDetails;