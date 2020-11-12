import React from 'react';



const Top = () => {
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("mybtn").style.top = "70px";
    } else {
      document.getElementById("mybtn").style.top = "-60px";
    }
  }

  return (
    <>
      <div className="d-flex  justify-content-center">
        <a href="#navtop" id="mybtn" className="topbtn"><i className="fas fa-angle-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back to top</a>
      </div>
    </>
  );
};

export default Top;