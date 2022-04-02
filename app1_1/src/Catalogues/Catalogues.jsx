import React from 'react';
import './Catalogues.css';

function Catalogues(props) {
  return (
      
      <>
        <center><b><h1 style={{fontWeight:'bolder'}}>CATALOGUES</h1></b></center>

        <div className="row" id='catalogues'>
            {props.data.map(function(product, index){
                return(
                    
                    <div className="col-xs-6 col-md-3" key={index}>
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
                );
            })}
        </div>
      </>
  )
}

export default Catalogues