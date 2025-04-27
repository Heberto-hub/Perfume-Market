import React from 'react';
import ReviewItem from './ReviewItem';
import './ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h3>Reseñas de los Usuarios</h3>
      {reviews && reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewItem key={review.id} review={review} />
        ))
      ) : (
        <p>Aún no hay reseñas para este producto.</p>
      )}
    </div>
  );
}

export default ReviewList;