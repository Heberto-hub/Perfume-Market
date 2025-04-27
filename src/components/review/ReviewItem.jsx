import React from 'react';
import RatingStars from '../common/RatingStars';
import './ReviewItem.css';

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h4>{review.user}</h4>
      <RatingStars rating={review.rating} size="small" />
      <p>{review.comment}</p>
    </div>
  );
}

export default ReviewItem;