import React, { useState } from 'react';
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {

  const [signState, SetSignState] = useState("Sign In");

  return (
    <div className='login'>
      <img src={logo} className='login__logo' alt="" />
      <div className="login__form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?<input type="text" placeholder='Your name' />:<></>}          
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{signState}</button>
          <div className="form__help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form__switch">
          {signState === "Sign In"?
            <p>New to Netflix? <span onClick={() => SetSignState("Sign Up")} >Sign Up Now</span></p>
            :<p>Already have account? <span onClick={() => SetSignState("Sign In")}>Sign In Now</span></p>
          }          
        </div>
      </div>
    </div>
  )
}

export default Login;