import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[]);

  return (
    <div className='shop-container'>

      {/* shop-container start */}
      <div className="product-container">
            <h2>Products comming here: {products.length}</h2>
      </div>

      {/* cart container start */}
      <div className="cart-container">
            <h4>Order Summary</h4>
      </div>
      
    </div>
  );
};
import './Shop.css'
export default Shop;