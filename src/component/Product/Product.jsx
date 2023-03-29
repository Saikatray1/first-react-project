import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const {img, name, seller, ratings, price, quantity} = props.product

  const handlerAddToCart = props.handlerAddToCart

  return (
    <div className='product'>
      <div className="product-info">
      <img src={img} alt="" />
      <h6 className='product-name'>{name}</h6>
      <h4 className='product-name'>Price: ${price}</h4>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings} Starts</p>
      </div>
      <button onClick={() =>handlerAddToCart(props.product)} className='btn-add-to-cart'>
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      
    </div>
  );
};

export default Product;