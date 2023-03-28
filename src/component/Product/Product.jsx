import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img, name, seller, ratings, price, quantity} = props.product
  return (
    <div className='product'>
      <div className="product-info">
      <img src={img} alt="" />
      <h6 className='product-name'>{name}</h6>
      <h4 className='product-name'>Price: ${price}</h4>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings} Starts</p>
      </div>
      <button className='btn-add-to-cart'>Add to cart</button>
      
    </div>
  );
};

export default Product;