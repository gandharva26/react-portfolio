import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import useScreenType from 'react-screentype-hook'; 

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const screenType = useScreenType();
   
    console.log(screenType.isMobile)
  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a   className="navbar-brand nav_ac" href="/">
            {logotext}

          </a> 
          <div id={screenType.isMobile ? "Mobile" : ""} style = {{ display:'flex', marginLeft :'0', marginRight:'auto'}}>
          <a    href="/" className="my-3" style = {{margin:'2%', textDecoration:'None'}}>HOME</a> 
          <a   href="/portfolio" className="my-3" style = {{margin:'2%', textDecoration:'None'}}> PORTFOLIO</a> 
          <a  href="/experience" className="my-3" style = {{margin:'2%', textDecoration:'None'}}>EXPERIENCE</a> 
          <a   href="/about" className="my-3" style = {{margin:'2%', textDecoration:'None'}}>ABOUT</a>    
          <a  href="/contact" className="my-3" style = {{margin:'2%', textDecoration:'None'}}>CONTACT</a> 
  
       
          </div>
     
          <div className="d-flex align-items-center">
            <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <a   onClick={handleToggle} href="/" className="my-3">Home</a> 
                  </li>
                  <li className="menu_item">
                    <a   onClick={handleToggle} href="/portfolio" className="my-3"> Portfolio</a> 
                  </li>
                  <li className="menu_item">
                  <a  onClick = {handleToggle} href="/experience" className="my-3">Experience</a> 
            
                  </li>
                  <li className="menu_item">
                  <a  onClick={handleToggle} href="/contact" className="my-3"> Contact</a> 
                  </li>
                  <li className="menu_item">
                  <a  onClick={handleToggle} href="/about" className="my-3">About</a> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
