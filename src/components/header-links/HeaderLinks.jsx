import React from 'react';
import usicon from '../../images/us-icon.webp'
import deicon from '../../images/de-icon4.webp'
import './headerlinks.css'

const HeaderLinks = () => {
  return (
    <div className='header-links'>
      <div className="header-right-links">
        <ul>
            <li className='usa-de-switch'>
                <div className='usa-website'>
                  <a href="#">
                   <img src={usicon} alt="" />
                    $USA
                   </a>
                </div>
                <div className="switch-website">
                    <a href="#">
                        <img src={deicon} alt="" />
                       €EUR 
                    </a>
                </div>
            </li>
            <li><a href="#">Our Craft</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Rewards</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderLinks;
