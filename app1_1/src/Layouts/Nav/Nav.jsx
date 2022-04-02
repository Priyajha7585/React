import React from 'react';


function Nav() {
  return (
    <>
        <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      {/* <a className="navbar-brand" href="#"><b style={{color:'black'}}>Brand</b></a> */}
      <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-heart" aria-hidden="true" style={{color:"black"}}></span></a>
    </div>

    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><a href="#"><b style={{color:'black'}}>Priya</b></a></li>
        <li><a href="#banner1">Banner1</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#banner2">Banner2</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#catalogues">Catalogues</a></li>
        <li><a href="#banner3">Banner3</a></li>
        <li><a href="#category">Categorical Products</a></li>
        <li><a href="#footer">Footer</a></li>
        
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav;