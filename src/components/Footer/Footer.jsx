import React from 'react';
import {Link} from 'react-router-dom'
import './footer.css'
import image2 from '../../images/logo 2-01.png'
import image3 from '../../images/melouky.png'
import image4 from '../../images/logo (1).png'
import image5 from '../../images/a1.png'
import image6 from '../../images/a2.png'
import image7 from '../../images/a3.png'
import image8 from '../../images/a4.png'
import image9 from '../../images/a5.png'
import image10 from '../../images/a6.png'
import { FaPlusMinus } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-logo">
            <img src={image2} alt="" />
            <p>65 Fort Worth Ave
                <br/>
             Dallas,TX 75208,USA
             <br/>
             Call us: (1800)MELOUKY 
             <br/>
             Email: contactus@melouky.com</p>
             <a href="#">Contact us</a>
        </div>
        <div className="footer-shop">
            <h3>Shop</h3>
            <a href="#">Staff Picks</a>
            <a href="#">Hookah Tobacco</a>
            <a href="#">Coal</a>
            <a href="#">Hookahs</a>
            <a href="#">Parts</a>
            <a href="#">Gear</a>
            <a href="#">Top Sellers</a>
        </div>
        <div className="footer-about">
            <h3>ABOUT MELOUKT</h3>
            <a href="#">Authorized Distributors</a>
            <a href="#">Careers</a>
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Official Melouky Hookah Flavors</a>
            <a href="#">Our Craft</a>
            <a href="#">110% Satisfaction Guarantee</a>
            <a href="#">Wholesale</a>
            <a href="#">Hookah Blog</a>
        </div>
        <div className="footer-websit">
           <h3>WEBSITE SUPPORT</h3>
            <a href="#">My Account</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">International Orders</a>
            <a href="#">Reward Points</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Age Verification</a>
            <a href="#">Accessibility</a>
        </div>
        <div className="footer-privacy">
            <h3>YOU MUST BE OF LEGAL AGE TO 
                <br/>
                 BUY TOBACCO PRODUCTS IN YOUR 
                 <br/>
                 COUNTRY AND TO USE THIS
                 <br/>
                  WEBSITE. (AT LEAST 21 YEARS OF
                  <br/>
                AGE IN THE USA).</h3>
              <Link to='/privacy'>privacy</Link>
              <a href="#">Terms of Use</a>
            <div className="privacy-icons">
              <img src={image4} alt="" className='hookah'/>
              <img src={image3} alt="" className='melouky'/>
            </div>
        </div>
      </div>
      <div className="footer-top-after">
        <div className="footer-logo-after">
          <img src={image2} alt="" />
          <p>65 Fort Worth Ave
                <br/>
             Dallas,TX 75208,USA
             <br/>
             Call us: (1800)MELOUKY 
             <br/>
             Email: contactus@melouky.com</p>
             <a href="#">Contact us</a>
        </div>
        <div className="footer-shop-after">
          <div className="footer-shop-head-after">
              <h3>shop</h3>
             <div className="pluss">
              <FaPlusMinus/>
             </div>
          </div>
          <hr />
          <ul className='footer-ul'>
            <li><a href="#">Staff Picks</a></li>
            <li><a href="#">Hookah Tobacco</a></li>
            <li><a href="#">Coal</a></li>
            <li><a href="#">Hookahs</a></li>
            <li><a href="#">Parts</a></li>
            <li><a href="#">Gear</a></li>
            <li><a href="#">Top Sellers</a></li>
          </ul>
        </div>
        <div className="footer-shop-after">
          <div className="footer-shop-head-after">
              <h3>ABOUT Melouky</h3>
             <div className="pluss">
              <FaPlusMinus/>
             </div>
          </div>
          <hr />
          <ul className='footer-ul'>
            <li><a href="#">Authorized Distributors</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Official Melouky Hookah Flavors</a></li>
            <li><a href="#">Our Craft</a></li>
            <li><a href="#">110% Satisfaction Guarantee</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Hookah Blog</a></li>
          </ul>
        </div>
        <div className="footer-shop-after">
          <div className="footer-shop-head-after">
              <h3>WEBSITE SUPPORT</h3>
             <div className="pluss">
              <FaPlusMinus/>
             </div>
          </div>
          <hr />
          <ul className='footer-ul'>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">International Orders</a></li>
            <li><a href="#">Reward Points</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Age Verification</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="footer-privacy-after">
        <h3>YOU MUST BE OF LEGAL AGE TO 
                <br/>
                 BUY TOBACCO PRODUCTS IN YOUR 
                 <br/>
                 COUNTRY AND TO USE THIS
                 <br/>
                  WEBSITE. (AT LEAST 21 YEARS OF
                  <br/>
                AGE IN THE USA).</h3>
              <div className="footer-privacy-after-links">
              <Link to='/privacy'>privacy</Link>
              <a href="#">Terms of Use</a>
              </div>
            <div className="footer-privacy-after-links">
            <div className="image-frame">
              <img src={image4} alt="" className='hookah'/>
              <img src={image3} alt="" className='melouky'/>
            </div>
            </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-down-des">
            <h1><span>MELOUKY-</span>MAKING MINDS TINGLE WITH TASTE SINCE
            <br/>
            <span>2010</span>
            </h1>
            <p>Born and raised in Dallas Texas. Melouky produces premium hookah tobacco in small
                 <br/>
                 batches that are replenished daily and packed in flavor-lock pouches. Smoke it fresh, every
                 <br/>
                  time, as it should be.</p>
        </div>
        <div className="footer-down-payment">
            <p>© 2024 Melouky Inc.</p>
            <div className="pay-cades">
                <img src={image5} alt="" />
                <img src={image6} alt="" />
                <img src={image7} alt="" />
                <img src={image8} alt="" />
                <img src={image9} alt="" />
                <img src={image10} alt="" />
            </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
