// Header.js
import React from 'react';
import './Header.css'; // Importing CSS file for styling
import cart from '../Assets/cart.jpg'; // Importing cart icon image
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const res=useSelector((state)=>state.cartData)
  console.warn("redux data in header",res);
  return (
    <div className="header">
    <Link to="/"><h1>home</h1></Link>
      <nav>
         <span>{res.length}</span>
      </nav>
      <Link to="/cart"> <img src={cart} alt="Cart" className="cart-icon" /> {/* Cart image */}</Link>
     
    </div>
  );
};

export default Header;
