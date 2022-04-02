import React from 'react'

function Contact_us() {
  return (
    <>
        {/* <div className="container-fluid">
        <div className="row">
        <div className="col-md-8">.
            <img src='https://wallpaperaccess.com/full/3124535.jpg' style={{height:"100px"}}/>
        </div>
        <div className="col-md-4">.col-md-4</div>
        </div>
        </div> */}
        <div className="container-fluid jumbotron h-100" id='contact'>
    <div className="row">
        <div className="col-lg-6 h-100">
            <img src='https://wallpaperaccess.com/full/3124535.jpg' style={{height:"100%", width:"100%"}}/>

        </div>
        <div className="col-lg-6">
            {/* Container Right */}
            <b><h2>Get In Touch</h2></b>
        </div>
    </div>
</div>
    </>
  )
}

export default Contact_us