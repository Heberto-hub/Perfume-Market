import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import perfumesData from '../../data/perfumes';
import './ProductList.css';
import { CartContext } from '../../contexts/CartContext';

function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {perfumesData.map(perfume => (
        <ProductCard key={perfume.id} perfume={perfume} />
      ))}
    </div>
  );
}

export default ProductList;