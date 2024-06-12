import React from 'react';
import './home.css'
import post1 from '../../images/b1.jpeg'
import post2 from '../../images/b2.jpeg'
import post3 from '../../images/b3.jpeg'
import tobaco1 from '../../images/tobaco1.jpeg'
import tobaco2 from '../../images/middletobaco.jpeg'
import tobaco3 from '../../images/tobaco3.jpeg'
import BlueberryMint from '../../images/Blueberry Mint.png'
import Mixgrape from '../../images/Mix grape.png'
import Grapemint from '../../images/Grape mint.png'
import Doubleapple from '../../images/Double apple.png'
import Love66 from '../../images/Love 66.png'
import Cinnamongum from '../../images/Cinnamon gum.png'
import peach from '../../images/peach.png'
import mint from '../../images/mint.png'
import Lemonmint from '../../images/Lemon mint.png'
import Cantaloupe from '../../images/Cantaloupe.png'
import Orangevanilla from '../../images/Orange vanilla.png'
import cherry from '../../images/cherry.png'
import Blueberry from '../../images/Blueberry.png'
import Waterlemonmint from '../../images/Water lemon mint.png'
import DoubleMelon from '../../images/Double Melon.png'
import Gummint from '../../images/Gum mint.png'
import kiwiburst from '../../images/kiwi burst.jpeg'

const Home = () => {
  return (
    <div>
        <div className="header">
            <h1>BLUEBERRY
                <br />
                Mint
            </h1>
            <p>WHEN IT'S SWEET & COOL,
                <br />
                IT'S TWICE AS MINT</p>
            <button>AVAILABLE NOW</button>    
        </div>
        <div className="main-tobaco">
            <h1 className='head-container'>SHOP MELOUKY HOOKAH TOBACCO & ACCESSORIES</h1>
            <div className="tobacos">
                <div className="tobaco">
                    <img src={tobaco1} alt="" />
                </div>
                <div className="tobaco">
                    <img src={tobaco2} alt=""/>
                </div>
                <div className="tobaco">
                    <img src={tobaco3} alt="" />
                </div>
            </div>
        </div>
        <div className="main-products">
            <h1 className='head-container'>PRODUCTS</h1>
            <div className="products">
             <div className="product">
                <img src={BlueberryMint} alt="" />
                <h3>Blueberry mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Mixgrape} alt="" />
                <h3>Mix grape</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={kiwiburst} alt="" />
                <h3>kiwi Burst</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Grapemint} alt="" />
                <h3>Grape mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Doubleapple} alt="" />
                <h3>Double apple delight</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Love66} alt="" />
                <h3>Love 66</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Cinnamongum} alt="" />
                <h3>Cinnamon gum</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={peach} alt="" />
                <h3>Peachy Dreams</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={mint} alt="" />
                <h3>Mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Lemonmint} alt="" />
                <h3>Lemon mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Cantaloupe} alt="" />
                <h3>Cantaloupe</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Orangevanilla} alt="" />
                <h3>Orange vanilla</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={cherry} alt="" />
                <h3>Wild Cherry</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Blueberry} alt="" />
                <h3>Blueberry Bliss</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Waterlemonmint} alt="" />
                <h3>Watermelon mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={DoubleMelon} alt="" />
                <h3>Double melon</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
             <div className="product">
                <img src={Gummint} alt="" />
                <h3>Gum mint</h3>
                <p>100g-$10</p>
                <p>250g-$22</p>
             </div>
            </div>
        </div>
        <div className="mix-series">
            {/* <button className='mix-button'>SHOP NOW</button> */}
        </div>
        <div className="recent-posts">
            <h1 className='head-container'>RECENT POSTS</h1>
            <div className="posts head-container">
                <div className="post">
                    <img src={post2} alt="" />
                    <h2>HOOKAH MASTER MIX
                        <br />
                        SERIES:OH SHE N'ICE
                    </h2>
                    <p className='dates'>12th Feb 2024</p>
                    <p>Tracie from Palmz Hookah Lounge in
                        <br />
                        Huntington Beach,CA,and dear friends
                        <br />
                        of Melouky, is finally on our Mix Series
                        <br />
                        with...
                    </p>
                </div>
                <div className="post">
                    <img src={post1} alt="" />
                    <h2>HOW TO CLEAN A
                        <br />
                        SILICON HOKAH
                        <br />
                        HOSE
                    </h2>
                    <p className='dates'>16th Jan 2024</p>
                    <p>We're back with a hookah
                        <br />
                        fundamental that is paramount to
                        <br />
                        keeping your hookah sessions as
                        <br />
                        flavorful as can be. While..
                    </p>
                </div>
                <div className="post">
                    <img src={post3} alt="" className='img-post3'/>
                    <h2>PACKING HOOKAH
                        <br />
                        WITH A FORK VS BY
                        <br />
                        HAND - WHAT'S
                        <br />
                        BETTER?
                    </h2>
                    <p className='dates'>9th Jan 2024</p>
                    <p>Hello Melouky and welcometo
                        <br />
                        Modern vs Tradiontal, a series
                        <br />
                        designed to highlight the old ways of
                        <br />
                        hookah to the n..
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
