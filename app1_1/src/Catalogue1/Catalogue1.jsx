import React from 'react'

function Catalogue1(props) {
  return (
    <div id='category'>
    <center><b><h1 style={{fontWeight:'bolder'}}>CATALOGUES</h1></b></center><hr />
    <center><b><h1 style={{fontWeight:'bolder'}}>GROCERY</h1></b></center>
    <div className="row">
    {props.data.map(function(product, index){
        return(
            <>
            <div  key={index}>{product.name == 'Grocery' ? <span>
            <div key={index} className="col-xs-6 col-md-3">
                <div className="thumbnail">
                <img className="image1" style={{height:"250px"}} src={product.src} alt="..." />
                <div className="caption">
                <h3><b>Name : {product.name}</b></h3>
                <p><b>Product Id : {product.id}</b></p>
                <p><b>In Stocks : {product.inStock > 0 ? product.inStock : <span>Not available</span>}</b></p>
                <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-default" role="button">Add to cart</a></p>       
                </div>
                </div>
            </div>
            </span> : <span></span>}</div>
            </>
        );
    })}
    </div>
    <hr />

    <center><b><h1 style={{fontWeight:'bolder'}}>CLOTHINGS</h1></b></center>
    <div className="row">
    {props.data.map(function(product, index){
        return(
            <>
            <div  key={index}>{product.name == 'Clothings' ? <span>
            <div key={index} className="col-xs-6 col-md-3">
                <div className="thumbnail">
                <img className="image1" style={{height:"250px"}} src={product.src} alt="..." />
                <div className="caption">
                <h3><b>Name : {product.name}</b></h3>
                <p><b>Product Id : {product.id}</b></p>
                <p><b>In Stocks : {product.inStock > 0 ? product.inStock : <span>Not available</span>}</b></p>
                <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-default" role="button">Add to cart</a></p>       
                </div>
                </div>
            </div>
            </span> : <span></span>}</div>
            </>
        );
    })}
    </div>

    <hr />

    <center><b><h1 style={{fontWeight:'bolder'}}>ELECTRONICS</h1></b></center>
    <div className="row">
    {props.data.map(function(product, index){
        return(
            <>
            <div  key={index}>{product.name == 'Electronics' ? <span>
            <div key={index} className="col-xs-6 col-md-3">
                <div className="thumbnail">
                <img className="image1" style={{height:"250px"}} src={product.src} alt="..." />
                <div className="caption">
                <h3><b>Name : {product.name}</b></h3>
                <p><b>Product Id : {product.id}</b></p>
                <p><b>In Stocks : {product.inStock > 0 ? product.inStock : <span>Not available</span>}</b></p>
                <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-default" role="button">Add to cart</a></p>       
                </div>
                </div>
            </div>
            </span> : <span></span>}</div>
            </>
        );
    })}
    </div>
    </div>
  )
}

export default Catalogue1