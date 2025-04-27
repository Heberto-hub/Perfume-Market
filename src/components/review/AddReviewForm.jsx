import React, { useState } from 'react';
import Button from '../common/Button';
import './AddReviewForm.css';

function AddReviewForm({ productId, onReviewAdded }) {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: `r${Date.now()}`,
      user,
      comment,
      rating,
    };
    onReviewAdded(productId, newReview);
    setUser('');
    setComment('');
    setRating(5);
  };

  return (
    <div className="add-review-form">
      <h3>Deja tu Reseña</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user">Nombre:</label>
          <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentario:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Calificación:</label>
          <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} required />
        </div>
        <Button type="submit">Enviar Reseña</Button>
      </form>
    </div>
  );
}

export default AddReviewForm;