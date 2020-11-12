import React from 'react';
import { NavLink } from "react-router-dom";



const Bottomfooter = () => {
  return (
    <>

      <footer className="page-footer font-small indigo main-footer">

        <div className="container-fluid text-center text-md-left">

          <div className="row">

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">POPULAR CATEGORIES</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#">Cars</NavLink>
                </li>
                <li>
                  <NavLink to="#">Flats for rent</NavLink>
                </li>
                <li>
                  <NavLink to="#">Jobs</NavLink>
                </li>
                <li>
                  <NavLink to="#">Mobile Phones</NavLink>
                </li>
              </ul>
            </div>


            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">TRENDING SEARCHES</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#">Bikes</NavLink>
                </li>
                <li>
                  <NavLink to="#">Watches</NavLink>
                </li>
                <li>
                  <NavLink to="#">Books</NavLink>
                </li>
                <li>
                  <NavLink to="#">Dogs</NavLink>
                </li>
              </ul>
            </div>


            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">

              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">ABOUT US</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="#">About OLX group</NavLink>
                </li>
                <li>
                  <NavLink to="#">OLX Blog</NavLink>
                </li>
                <li>
                  <NavLink to="#">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="#">OLX for Businesses</NavLink>
                </li>
              </ul>

            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">

              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">OLX</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="#">Help</NavLink>
                </li>
                <li>
                  <NavLink to="#">Sitemap</NavLink>
                </li>
                <li>
                  <NavLink to="#">Legal & Privacy information</NavLink>
                </li>
              </ul>

            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto align-items-center">

              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">FOLLOW US</h5>

              <NavLink to="#"><i className="footer-icon  fab fa-facebook"></i></NavLink>
              <NavLink to="#"><i className="footer-icon  fab fa-twitter"></i></NavLink>
              <NavLink to="#"><i className="footer-icon  fas fa-play"></i></NavLink>
              <NavLink to="#"><i className="footer-icon  fab fa-instagram"></i></NavLink>
              <br />
              <button className="footer-button btn btn-dark"><i className="fab fa-apple"></i>Download on the<p>App Store</p></button>
              <button className="footer-button btn btn-dark"><i className="fab fa-google-play"></i>GET IT ON<p>Google Play</p></button>
            </div>

          </div>

        </div>
      </footer>

      {/*  End Footer */}
      <footer>
        <div className="justify-content-center">Olx Clone | <a href="https://www.facebook.com/officialmuzi" target-blank="true">Syed Muzammil Ashfaque</a></div>
      </footer>
      {/*  End Footer */}
    </>
  );
};

export default Bottomfooter;