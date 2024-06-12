import React from 'react';
import './followus.css'
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram , FaFacebookF } from "react-icons/fa";



const Followus = () => {
  return (
    <div className='follow-us'>
      <div className="left-follow">
        <h3>JOIN OUR EMAIL LIST</h3>
        <div className="form">
            <form>
            <div className="inputs">
            <input type="text" placeholder='First Name' required/>
            <input type="email" placeholder='Email Address' required/>
            </div>
            <button type='submit'>SIGN UP</button>
            </form>
        </div>
      </div>
      <div className="right-follow">
        <h1>Follow Us</h1>
        <div className="follow-icon">
        <BsWhatsapp/>
        <FaInstagram/>
        <a href="https://www.facebook.com/profile.php?id=61560014580074" target='_blank'><FaFacebookF/></a>
        </div>
      </div>
    </div>
  );
}

export default Followus;
