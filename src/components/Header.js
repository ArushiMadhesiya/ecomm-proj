// Header.js
import React from 'react';
import './Header.css'; // Importing CSS file for styling
import cart from '../Assets/cart.jpg'; // Importing cart icon image
import { useSelector } from 'react-redux';

const Header = () => {
  const res=useSelector((state)=>state.cartData)
  console.warn("redux data in header",res);
  return (
    <div className="header">
      <h1>Welcome to My React App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><span>{res.length}</span></li>
        </ul>
      </nav>
      <img src={cart} alt="Cart" className="cart-icon" /> {/* Cart image */}
    </div>
  );
};

export default Header;
