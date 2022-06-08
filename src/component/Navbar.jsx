import React from "react";
import ScrollDialog from "./ScrollDialog";
import { useCart } from "react-use-cart";




const Navbar = () => {
  const {
    
    totalItems,
  
  } = useCart();

  return (
    <div id="navbar">
      <nav  className="navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm ">
        <div  className="container">
          <a className="navbar-brand fw-bold fs-4 "  href="/">
          <img src="https://i.ibb.co/sVGghxJ/homrdecore.jpg" width="110px" class="rounded-circle" />
             </a>
            
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              
                
              </li>
              <li className="nav-item" >
              <a className="nav-link active" aria-current="page" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/about">
                About
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contact">
                Contact
                </a>
              
              </li>
            </ul>
            <div className="buttons">
                
                {/* <a className="btn btn-dark m-3">
                   <LoginDilog /></a> */}
                <a  type="button" class="btn btn-dark">
                    <ScrollDialog /> </a>
               
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
