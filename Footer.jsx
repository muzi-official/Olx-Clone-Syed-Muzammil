import React from 'react';
import footerbg from '../src/images/flogo.png';




const Footer = () => {
    return (
        <>

<div className="container-fluid footer-section">
  <div className="row">


    <div className="col-sm left-footer align-items-center">
    <div className=" offset-md-2">
  <img className="img-fluid" src={footerbg} alt="Olx Banner" />
  </div>
    </div>





    <div className="col-sm center-footer">
      <div className="offset-md-2">
  <p className="h2  green-color-center">TRY THE OLX APP</p>
  <p className="h5">Buy, sell and find just about anything using the app on your mobile.</p>
</div>
</div>





    <div className="col-sm right-footer">
    <div className="offset-md-3">
    <p className="h5">GET YOUR APP TODAY</p>
  <button className="btn btn-dark btn-lg d-inline"><i className="fab fa-apple"></i>Download on the<p>App Store</p></button>
<button className="btn btn-dark btn-lg d-inline"><i className="fab fa-google-play"></i>GET IT ON<p>Google Play</p></button>
    </div>
  </div>

  </div>
  </div>
        </>
    );
};

export default Footer;