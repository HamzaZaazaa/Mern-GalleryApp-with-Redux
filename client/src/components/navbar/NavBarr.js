import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarr.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import alzaPic from "./AlzaLogonbg.png";
import { motion } from "framer-motion";
const NavBarr = () => {
  // take the initial state which is false
  const auth = useSelector((state) => state.authReducer.auth);
  const disptach = useDispatch();
  // Logout function
  const handleLogOut = () => {
    disptach(logout());
  };
  return (
    <div>
      <Navbar bg='light' variant='dark' fixed='top' className='navbarclass'>
        <Container>
          <motion.img
            src={alzaPic}
            alt=''
            className='navbarLogo'
            animate={{ x: 20, y: -7 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          />
          <Nav className='me-auto'>
            {auth ? (
              <>
                <Link to='/gallery'>
                  <Button variant='outline-warning' id='gallerybtn'>
                    Gallery
                  </Button>
                </Link>
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
                <Link to='/' className='nav-link'>
                  <Button variant='outline-dark' id='homebtn'>
                    Home
                  </Button>
                </Link>
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
