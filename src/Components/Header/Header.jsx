import React from 'react';
import '../Header/Header.css';
import '../Header/HeaderResponsive.css';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div className="header-section">
      <div className="left-side">
        <div className="logo_div">
          {/* <h1>A</h1> */}
          <span className='logo_name'>ASHLY</span>
         {/* <img src={Logo} alt="Logo" className='image_sec' />  */}
        </div>
       
        
      </div>
      <div className="End-Section">
       <Link to="/contact"><button className="button_hello" type="button">Say Hello</button></Link> 
      </div>
    </div>
  );
}

export default Header;
