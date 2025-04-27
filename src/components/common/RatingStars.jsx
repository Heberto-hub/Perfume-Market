import React from 'react';
import './RatingStars.css';

function RatingStars({ rating, size = 'medium' }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`rating-stars ${size}`}>
      {Array(fullStars).fill(<span key={Math.random()} className="star full">★</span>)}
      {hasHalfStar && <span className="star half">½</span>}
      {Array(emptyStars).fill(<span key={Math.random()} className="star empty">☆</span>)}
    </div>
  );
}

export default RatingStars;