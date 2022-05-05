import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarr.css";
import { Link } from "react-router-dom";

function NavBarr() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg ftco_navbar ftco-navbar-light'
        id='ftco-navbar'
      >
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <p>MERN APP</p>
          </Link>
          <div className='social-media order-lg-last'>
            <p className='mb-0 d-flex'>
              <a
                href='https://www.facebook.com/XTrickster00/'
                target='_blank'
                className='d-flex align-items-center justify-content-center'
              >
                <span className='fa fa-facebook'>
                  <i className='sr-only'>Facebook</i>
                </span>
              </a>
              <a
                href='https://www.instagram.com/hamza_zaazaa/?hl=en'
                target='_blank'
                className='d-flex align-items-center justify-content-center'
              >
                <span className='fa fa-instagram'>
                  <i className='sr-only'>Instagram</i>
                </span>
              </a>
            </p>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#ftco-nav'
            aria-controls='ftco-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='fa fa-bars' /> Menu
          </button>
          <div className='collapse navbar-collapse' id='ftco-nav'>
            <ul className='navbar-nav ml-auto mr-md-3'>
              <li className='nav-item'>
                <Link to='/login' className='nav-link'>
                  <p>Login</p>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/signup' className='nav-link'>
                  <p>Register</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarr;
