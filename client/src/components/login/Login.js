import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const disptatch = useDispatch();
  const navigate = useNavigate();
  // Input function
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // Submit function
  // send navigate to the action
  const handleSubmit = (e) => {
    disptatch(login(data, navigate));
  };
  return (
    <div>
      <div className='signupcontainer'>
        <div className='form'>
          <div className='title'>SIGN IN</div>
          <div className='input-container ic2'>
            <input
              id='email'
              className='input'
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
            <div className='cut cut-short' />
            <label htmlFor='email' className='placeholder'>
              Email
            </label>
          </div>
          <div className='input-container ic2'>
            <input
              id='email'
              className='input'
              type='password'
              placeholder='Password '
              name='password'
              onChange={handleChange}
            />
            <div className='cut cut-short' />
            <label htmlFor='password' className='placeholder'>
              Password
            </label>
          </div>
          <button type='submit' className='submit' onClick={handleSubmit}>
            Sign in
          </button>
          <div className='subtitle'>Don't have an account yet!</div>
          <Link to='/signup'>
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
