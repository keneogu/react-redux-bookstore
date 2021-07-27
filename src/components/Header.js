import React from 'react';
import CategoryFilter from './CategoryFilter';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="head-text">
        <h1 className="head-1">BookStore</h1>
        <span className="head-span-1">Books</span>
        <span className="head-span"><CategoryFilter /></span>
      </div>
      <div className="head-icon">
        
      </div>
    </div>
  );
}

export default Header;