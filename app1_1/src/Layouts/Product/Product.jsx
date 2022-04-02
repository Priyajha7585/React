import React from 'react'

function Product(props) {
//     var products = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8"]
//     var images = ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80", 
//     "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXIlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//     "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg",
//     "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     "https://c0.wallpaperflare.com/preview/579/90/558/products-laptop-computer-keyboard.jpg",
//     "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
//     "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
// ]  
    // var products = props.data;

   return (
    <>
       <center><b><h1 style={{fontWeight:'bolder'}}>PRODUCTS</h1></b></center>

        <div className="row" id='product'>
        {props.data.map(function(product, index){
            return(
                <div key={index} className="col-xs-6 col-md-3">
                    <div className="thumbnail">
                    <img src={product.src} alt="..." />
                    <div className="caption">
                        <h3 key={index}><b>Name : {product.name + " " + (index+1)}</b></h3>
                        <p><b>Product Id : {product.id}</b></p>
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

export default Product