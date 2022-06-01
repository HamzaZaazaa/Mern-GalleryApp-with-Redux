import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";
const Signup = () => {
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
    <div className='form'>
      <div className='title'>SIGN UP</div>
      <div className='subtitle'>
        Already have an account!
        <Link to='/login' className='signuppara'>
          <p>Sign in</p>
        </Link>
      </div>
      {/* FirstName */}
      <div className='input-container ic1'>
        <input
          id='firstname'
          className='input'
          type='text'
          placeholder='Your Name here '
          onChange={handleChange}
          name='name'
          required
        />
        <div className='cut' />
        <label htmlFor='firstname' className='placeholder'>
          First name
        </label>
      </div>
      {/* LastName */}
      <div className='input-container ic2'>
        <input
          id='email'
          className='input'
          type='text'
          placeholder='Your Last name here '
          onChange={handleChange}
          name='lastname'
          required
        />
        <div className='cut cut-short' />
        <label htmlFor='email' className='placeholder'>
          Last name
        </label>
      </div>
      {/* Email */}
      <div className='input-container ic2'>
        <input
          id='email'
          className='input'
          type='text'
          placeholder='Your Email here '
          onChange={handleChange}
          name='email'
          required
        />
        <div className='cut cut-short' />
        <label htmlFor='email' className='placeholder'>
          Email
        </label>
      </div>
      {/* password */}
      <div className='input-container ic2'>
        <input
          id='email'
          className='input'
          type='password'
          placeholder='Your Password here'
          onChange={handleChange}
          name='password'
          required
          minlength='8'
        />
      </div>
      <button type='text' className='submit' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default Signup;
