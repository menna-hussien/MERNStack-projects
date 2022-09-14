import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Social Mania</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Socail Mania.
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input type='text' placeholder='Username' className='loginInput' />
            <input type='Email' placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <input
              type='password'
              placeholder='Password Again'
              className='loginInput'
            />
            <button className='loginButton'>Sign Up </button>
            <span className='loginForgot'>Forgot password?</span>
            <button className='loginRegisterButton'>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
