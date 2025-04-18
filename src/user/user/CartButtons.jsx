import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

// Enhanced AddToCart button for product listing page
export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        weight: product.weight || '500 g',
        quantity: 1
      }));
    }
  };
  
  return (
    <>
      <button 
        onClick={handleAddToCart}
        className="w-full py-2 text-center rounded cursor-pointer "
        style={{ 
          backgroundColor: isInCart ? '#E6F2EF' : '#21785E',
          color: isInCart ? '#21785E' : '#FFFFFF'
        }}
      >
        {isInCart ? 'ADDED' : 'ADD'}
      </button>
    </>
  );
};

// Enhanced AddToCart button for product details page
export const AddToCartDetailButton = ({ product, quantity = 1 }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        weight: product.weight || '500 g',
        quantity
      }));
    }
  };
  
  return (
    <>
      <button
        onClick={handleAddToCart}
        className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg cursor-pointer"
        style={{
          backgroundColor: isInCart ? '#E6F2EF' : '#21785E',
          color: isInCart ? '#21785E' : '#FFFFFF'
        }}
        disabled={isInCart}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </>
  );
};
