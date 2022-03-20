import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
    <div className='header'>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#" >Java</a></li>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
    </ul>
      <ul>
        <a href='#banner_one'><li>Banner One</li></a>
        <a href='#products'><li>Products</li></a>
        <a href='#banner_two'><li>Banner Two</li></a>
        <a href='#contact_us'><li>Contact Us</li></a>
        <a href='#banner_three'><li>Banner Three</li></a>
        <a href='#footer'><li>Footer</li></a>
      </ul>
    </div>
    <div className='layout banner_one' id="banner_one">
      <h1>Banner One</h1>
    </div>
    <div className='layout products' id="products">
      <h1>Products</h1>
    </div>
    <div className='layout banner_two' id="banner_two">
      <h1>Banner Two</h1>
    </div>
    <div className='layout contact_us' id="contact_us">
      <h1>Contact Us</h1>
    </div>
    <div className='layout banner_three' id="banner_three">
      <h1>Banner Three</h1>
    </div>
    <div className='theme-bl footer' id="footer">
      <h1>Footer</h1>
    </div>
  </>,
  document.getElementById('root')
);

