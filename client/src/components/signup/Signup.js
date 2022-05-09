import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";

function Signup() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
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
    disptatch(register(data, navigate));
  };
  return (
    <div className='signupcontainer'>
      <div className='form'>
        <div className='title'>SIGN UP</div>
        <div className='subtitle'>
          Already have an account!
          <Link to='/login'>
            <p>Sign in</p>
          </Link>
        </div>
        <div className='input-container ic1'>
          <input
            id='firstname'
            className='input'
            type='text'
            placeholder='Name'
            name='name'
            onChange={handleChange}
          />
          <div className='cut' />
          <label htmlFor='firstname' className='placeholder'>
            First name
          </label>
        </div>
        <div className='input-container ic2'>
          <input
            id='lastname'
            className='input'
            type='text'
            placeholder='Lastname '
            name='lastname'
            onChange={handleChange}
          />
          <div className='cut' />
          <label htmlFor='lastname' className='placeholder'>
            Last name
          </label>
        </div>
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
            className='input'
            type='password'
            placeholder='password '
            name='password'
            onChange={handleChange}
          />
          <div className='cut cut-short' />
          <label htmlFor='password' className='placeholder'>
            Password
          </label>
        </div>
        <button type='submit' className='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Signup;
