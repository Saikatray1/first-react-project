import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
      <div className="products-container">
            {
              products.map(product => <Product key={product.id} product={product}
              ></Product>)
            }
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