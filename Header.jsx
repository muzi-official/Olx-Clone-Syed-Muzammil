import React from 'react';
import { NavLink } from 'react-router-dom';
import mainlogo from '../src/images/mainlogo.png';
import modallogo1 from '../src/images/mainlogo.png';
import modallogo2 from '../src/images/mainlogo.png';
import modallogo3 from '../src/images/mainlogo.png';
import { connect } from 'react-redux';
import { facebook_login } from '../src/store/action';
import { google_login } from '../src/store/action';
import { signOut } from '../src/store/action';
import Message from './Message';
import {Route} from 'react-router-dom';


const Header = (props) => {
  //Sign In With Phone Number Start//

  // function signInWithPhone() {
  // var phoneNumber = getPhoneNumberFromUserInput();
  // var appVerifier = window.recaptchaVerifier;
  // firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       window.confirmationResult = confirmationResult;
  //     }).catch(function (error) {
  //       console.log(error.message)
  //     });
  //   }

  //Sign In With Phone Number End//


  // //img  button //
  // upload_file = () => {
  //   var ref =firebase.storage().ref().child(`images/${this.state.name}`).put(this.state.file)
  // }


// Sell Btn //
const sellbtn = () => {
  if(user != true){
    alert("Please Login First")
  }
}
// Sell Btn //

  //  Search Function //
  const search = () => {
    const search = document.getElementById('search');
    const filter = search.value.toUpperCase();
    var list = document.getElementsByClassName('card-title');
    for (var i = 0; i < list.length; i++) {
      // console.log(list[i].innerText);
      if (list[i].innerText.toUpperCase().indexOf(filter) > -1) {
        list[i].parentElement.parentElement.parentElement.style.display = "";
      }
      else {
        var a = list[i].parentElement.parentElement.parentElement;
        a.parentElement.removeChild(a);

      }
    }
  }

  let user = props.current_user;

  return (

    <>

     <Route exact path="/Message" component={Message} />


      <div id="navtop"></div>
      <div className="container-fluid header">
        <div className="row align-items-center text-left">


          <div className="col-md-4  left">
            <div className="d-inline" id="display">
              <img src={mainlogo} className="mainlogo" alt="olx" />
            </div>

            <div className="location rel flex aic d-inline align-items-center">
              <div className="align-items-center icon-search ico d-inline"><i className="fas fa-search d-inline" aria-hidden="true"></i>
                <input id="outline" className="label font d-inline" placeholder="Your Location" value="Karachi" />

                <button className="btn icon-chevron-down arro d-inline" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Sindh</NavLink>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Punjab</NavLink>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Islamabad Capital Territory</NavLink>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Khyber Pakhtunkhwa</NavLink>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Hyderabad</NavLink>
                  <NavLink className="dropdown-item" to="#"><i className="fas fa-map-marker-alt"></i>      Peshawar</NavLink>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-5 center align-items-center">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input id="outline" className="form-control my-0 py-1 amber-border" type="text" name="search" id="search" placeholder="Find Cars, Mobile Phones and more...." aria-label="Search" onChange={search} />
            </div>
          </div>


          {/* //Right// Start*/}
          <div className="col-md-3 right" id="display">
          
             <div className="rounded-circle d-inline user_message">
                <NavLink to='/Message'><i id="none" className="user_message far fa-comment-alt"></i></NavLink></div> 
            
              <div className="rounded-circle d-inline user_notify"><i id="none" className="user_notify far fa-bell"></i></div>

              <img id="none" className="rounded-circle d-inline user_img" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src={user.profile} alt="User" title="Go To Profile" />

              <div class="dropdown-menu user_profile">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <NavLink className="dropdown-item" to="#">My Add</NavLink>
                <NavLink to='/Userprofile' className="dropdown-item">Edit Profile</NavLink>
                <button id="logoutbtn" className="btn" onclick={() => props.signOut()}>Logout</button>
              </div>
          
           <button id="loginbtn" className="btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Login</button>
        
        
     &nbsp; &nbsp;
      <button id="modalActivate" type="button" class="sellbtn btn btn-danger" data-toggle="modal" data-target="#exampleModalPreview" style={{ color: 'black' }} onclick={()=>sellbtn()}>
              <i className="fas fa-plus"></i> SELL</button>

            {/* //  Header Right Closed // */}


          </div>
        </div>
      </div>
      {/* Header Closed */}


      {/* Login form Start */}
      <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-items-center">
                  <div className="col-md-12 d-flex justify-content-center">
                    <img src={modallogo1} className="modal_logo" alt="olx" />
                  </div>

                  <form className="login-form">
                    <div className="form-group">
                      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.facebook_login()}><i className="fab fa-facebook rounded"></i>   Continue with Facebook</button>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.google_login()}><i className="fab fa-google rounded"></i>   Continue with Google</button>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#exampleModalLong"><i className="fas fa-mobile rounded"></i>    Continue with Phone</button>
                    </div>
                    <br />
                    <div className="modal-footer justify-items-center text-center">
                      <h2 className="text-justify log-paragraphy text-center" id="footertext">We won't share your personal details with anyone</h2>
                      <p className="text-center" style={{ fontSize: "13px" }}>If you continue, you are accepting
                       <NavLink to="#" style={{ fontSize: "13px", textDecoration: "none" }}>&nbsp;&nbsp;OLX Terms and Conditions and Privacy Policy</NavLink></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login form  Close*/}


      {/*Phone Number modal Start*/}
      <div className="modal otp_modal" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-left">
              <button type="button" className="otp_close mr-auto close" data-dismiss="modal" aria-label="Close">
                <i className="mr-auto fas fa-arrow-left"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-md-12 d-flex justify-content-center">
                <img src={modallogo2} className="modal_logo" alt="olx" />
              </div>

              <div className="form-group row">
                <h2 className="text-justify log-paragraphy text-center">Enter Your Phone</h2>
                <div className="col-12">
                  <br /><br />
                  <input id="otpinput" type="number" name="number" className="form-control" placeholder="Phone Number" required />
                  <br /><br />
                  <button type="submit" id="otpbtn" type="button" className="btn btn-dark btn-lg btn-block">Next</button>
                </div>
              </div>
            </div>
            <div id="otpfooter" className="modal-footer otp-footer justify-items-center text-center">
              <p className="text-justify log-paragraphy text-center">We won't reveal your phone number to anyone else nor use it to send you spam</p>
            </div>
          </div>
        </div>
      </div>
      {/* Phone Number Modal End */}


      {/* Header sellbtn modal  */}
      <div className="signin">
        <div className="container my-4">
          <div className="modal" id="exampleModalPreview" tabIndex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
            <div className="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
              <div className="modal-content-full-width modal-content ">
                <div className="sticky modal-header-full-width modal-header  flex">
                  <div className="mr-auto">
                    <NavLink to="./" className="close_logo close" data-dismiss="modal" aria-label="Close"><i className="fas fa-arrow-left"></i>
                    </NavLink>
                    <img src={modallogo3} className="logo" alt="olx" />
                  </div>
                </div>

                <div className="modal-body">


                  <div className="Fullpage">

                    <h3 id="title2">POST YOUR AD</h3>

                    <div className="AdFormMain container">

                      <div className="form-group col-md-12 col-sm-12">
                        <label for="adTitle">Ad Title</label>
                        <input type="text" className="form-control" id="adTitle" required />
                      </div>

                      <div className="form-group col-md-12">
                        <label for="Category">Category</label>
                        <select id="Category" className="form-control" required>
                          <option value="Mobiles">Mobiles</option>
                          <option value="Cars">Cars</option>
                          <option value="Bikes">Bikes</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Kids">Kids</option>
                          <option value="Animals">Animals</option>

                        </select>
                      </div>

                      <div className="form-group col-md-12">
                        <label for="AdDescription">Ad Description</label>
                        <textarea className="form-control" placeholder="Include the brand, model, age and any included accessories." id="AdDescription" required></textarea>
                      </div>
                      <div className="form-group col-md-12 ">
                        <div className="form-group ">
                          <label for="UploadImage">Upload Photos</label>
                          <input type="file" className="form-control-file" id="UploadImage" required />
                        </div>

                        <div className="form-group">
                          <label for="Number">Price</label>
                          <input type="number" className="form-control" id="price" required />
                        </div>

                        <div className="form-group">
                          <label for="Name">Name</label>
                          <input type="text" className="form-control" id="Name" required />
                        </div>

                        <div className="form-group">
                          <label for="Number">Number</label>
                          <input type="number" className="form-control" id="Number" required />
                        </div>

                        <div className="form-group">
                          <label for="city">City</label>
                          <select id="city" className="form-control" required>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                          </select>
                        </div>
                        <button type="button" className="sell_modal_btn btn btn-primary mb-2" onclick="submitAd()">Submit Ad</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header sellbtn modal  */}


    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  current_user: state.current_user,
})

const mapDispatchToProps = (dispatch) => ({
  facebook_login: () => dispatch(facebook_login()),
  google_login: () => dispatch(google_login()),
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

