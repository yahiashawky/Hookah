import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './topbar.css'

const TopBar = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical:true,
        mobileFirst:true,
        arraws:false
      };
  return (
    <div className="topbar">
       <Slider {...settings}>
            <p>Free Shipping On Orders $99+</p>
            <p>Any 3 100g Pouches For $25. No Limit.</p>
        </Slider>
    </div>
  );
}

export default TopBar;
