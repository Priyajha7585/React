import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Layouts/Nav/Nav';
import Banner1 from './Layouts/Banner1/Banner1';
import Banner2 from './Layouts/Banner2/Banner2';
import Banner3 from './Layouts/Banner3/Banner3';
import Product from './Layouts/Product/Product';
import Contact_us from './Layouts/ContactUs/Contact_us';

ReactDOM.render(
  <>
  <Nav />
  <Banner1 />
  <Product />
  <Banner2 />
  <Contact_us />
  <Banner3 />
  <h1>Hiii, Priya!!!</h1>
  
  </>,
  document.getElementById('root')
);


