import React, { useState } from "react";
import Header_logo from "../assets/logo/logo.png";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoPeopleCircle } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import header_image from "../assets/logo/waterbottle.png";
import ProductPage from "../pages/productPage";
import {Link} from "react-router-dom";
import commingsoon from "../pages/commingSoon";




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollDown=()=>{
    window.scrollBy(
      
      {
        top:674,
        behavior:"smooth"
      }
    );
  };
 
  return (
    <>
    <div className="hiscope_hydra-main-container">

    </div>
    <div className="profile"><Link to="/login" className="profilelink"><IoPeopleCircle /></Link>
    </div>


        
          <img src={Header_logo} className="logoheader" />
       

       <div className="bannerImage">
        <img src={header_image} alt="headerImage" className="header_image_style"/>
       </div>
     
<Link to="/productpage">      
 <button className="button1" >Shop Now </button>
</Link>      
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="/">Home</Link>  
            </li>
            <li className="nav-item">
             <a href="#" onClick={scrollDown}>Our water</a>
            </li>
            <li className="nav-item">
              <Link to="/distributer">Be Our Distributer</Link> 
            </li>
            <li className="nav-item">
            <Link to="/productpage">Shop</Link> 
            </li>
            <li className="nav-item">
              <Link to="/commingSoon">Coming soon</Link>
            </li>
            <li className="nav-item">
              <a href="#" onClick={scrollDown}>About</a>
            </li>
          </ul>
        </nav>

      <div className="barheader">
        <ul className={isOpen ? "active_harder_nav_ul" : "harder_nav_ul"}>
          <li className="barli">
            <a href="#">Home</a>
          </li>
          <li className="barli">
            <a href="#"onClick={scrollDown}>Our water</a>
          </li>
          <li className="barli">
            <a href="#">Be Our Distributer</a>
          </li>
          <li className="barli">
            <Link to="/productpage">Shop</Link>  
          </li>
          <li className="barli">
            <Link to="/commingSoon">Coming soon</Link>
          </li>
          <li className="barli">
            <a href="#"onClick={scrollDown}>About</a>
          </li>
        </ul>
      </div>
      <div className="bar" onClick={toggleMenu}>
          {isOpen ? <RxCross2 /> : <FaBars/>}
        </div>
        <div className="movingtext">
       <marquee direction="left">Taste the Purity! Zero Calories, Naturally Mineral-Rich Water, Gently Filtered Through Sand, Carbon, and Reverse Osmosis – Refreshing Flavors Coming Soon! Hydrate with Us</marquee>
       </div>
    </>
  );
};

export default Header;