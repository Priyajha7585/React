import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

ReactDOM.render(
  <>
    <div class="text-color layout header">
      <ul className="menu">
        <li>Home</li>
        <a href="#products">
          <li>Products</li>
        </a>
        <li>Contact Us</li>
        <a href="#footer">
          <li>About Us</li>
        </a>
        <li>Help</li>
      </ul>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    <div class="layout banner-one">
      <h1>Banner-One</h1>
    </div>
    <div class="layout " id="products">
      <h1>Products</h1>
    </div>
    <div class="layout banner-two">
      <h1>Banner-Two</h1>
    </div>
    <div class="layout contact">
      <h1>Contact-Us</h1>
    </div>
    <div class="layout banner-three">
      <h1>Banner-Three</h1>
    </div>
    <div class="layout footer text-color" id="footer">
      <h1>Footer</h1>
    </div>
  </>,
  document.getElementById('root')
);
