import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div className="">
      <a href="/order">Order</a>
      <a href="/order-review">Order Review</a>
      <a href="/inventory">Manage Inventory</a>
      <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;<h1>This is a header section</h1>