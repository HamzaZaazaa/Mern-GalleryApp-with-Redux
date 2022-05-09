import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarr.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

function NavBarr() {
  // take the inital state which is false
  const auth = useSelector((state) => state.authReducer.auth);
  const disptach = useDispatch();
  // Logout function
  const handleLogOut = () => {
    disptach(logout());
  };
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
          <ul className='navbar-nav ml-auto mr-md-3'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <Button variant='dark'>Home</Button>
              </Link>
            </li>
          </ul>
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
            {auth ? (
              <>
                <Link to='/profile'>
                  <Button variant='dark' id='profilebtn'>
                    Profile
                  </Button>
                </Link>
                <Button variant='dark' id='logoutbtn' onClick={handleLogOut}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to='/login' className='nav-link'>
                  <Button variant='dark' id='loginbtn'>
                    Login
                  </Button>
                </Link>

                <Link to='/signup' className='nav-link'>
                  <Button variant='dark' id='signupbtn'>
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarr;
