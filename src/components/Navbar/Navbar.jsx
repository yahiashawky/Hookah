import React from 'react';
import { CiMenuFries } from "react-icons/ci";
import image1 from '../../images/logo 2-01.png'
import './navbar.css'

const Navbar = () => {
    function openmenu(){
        document.querySelector('.ul').classList.toggle('click')
    }
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={image1} alt="melouky-icon"/>
      </div>
      <div className="navbar-middle">
        <a href="#">HOOKAH TOBACCO</a>
        <a href="#">COAL</a>
        <a href="#">HOOKAHS</a>
        <a href="#">PARTS</a>
        <a href="#">GEAR</a>
      </div>
      <div className="navbar-right">
      <CiMenuFries className='menu' onClick={openmenu}/>
      </div>
      <div className="open">
        <ul className='ul'>
            <li>gum mint</li>
            <li>cinnamon gum</li>
            <li>Mint</li>
            <li>Grape mint</li>
            <li>lemon mint</li>
            <li>Watermelon mint</li>
            <li>Double apple delight</li>
            <li>Blueberry bliss</li>
            <li>Orage vanilla</li>
            <li>Cantaloupe</li>
            <li>Wild cherry</li>
            <li>Mix grape</li>
            <li>Peachy dreams</li>
            <li>Kiwi</li>
            <li>Love 66</li>
            <li>Double melon</li>
            <li>blueberry mint</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
