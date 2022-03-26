import React from 'react';


function Nav() {
  return (
    <>
        <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      {/* <a class="navbar-brand" href="#"><b style={{color:'black'}}>Brand</b></a> */}
      <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-heart" aria-hidden="true" style={{color:"black"}}></span></a>
    </div>

    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#"><b style={{color:'black'}}>Priya</b></a></li>
        <li><a href="#banner1">Banner1</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#banner2">Banner2</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#banner3">Banner3</a></li>
        <li><a href="#footer">Footer</a></li>
        
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav;