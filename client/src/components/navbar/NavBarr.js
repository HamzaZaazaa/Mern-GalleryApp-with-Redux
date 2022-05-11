import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarr.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import alzaPic from "./AlzaLogonbg.png";

const NavBarr = () => {
  // take the inital state which is false
  const auth = useSelector((state) => state.authReducer.auth);
  const disptach = useDispatch();
  // Logout function
  const handleLogOut = () => {
    disptach(logout());
  };
  return (
    <div>
      <Navbar bg='light' variant='dark' sticky='top'>
        <Container>
          <img src={alzaPic} alt='' className='navbarLogo' />
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>
              <Button variant='outline-dark' id='homebtn'>
                Home
              </Button>
            </Link>
            {auth ? (
              <>
                <Link to='/profile'>
                  <Button variant='outline-secondary' id='profilebtn'>
                    Profile
                  </Button>
                </Link>
                <Button
                  variant='outline-danger'
                  id='logoutbtn'
                  onClick={handleLogOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to='/login' className='nav-link'>
                  <Button variant='outline-dark' id='loginbtn'>
                    LogIn
                  </Button>
                </Link>

                <Link to='/signup' className='nav-link'>
                  <Button variant='outline-info' id='signupbtn'>
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBarr;
