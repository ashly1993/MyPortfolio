import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './HeaderResponsive.css';
import Logo from '../../images/Asset 1.png';


function Header() {
  return (
    <div className="header-section">
      <div className="left-side">
        <div className="logo_div">
          {/* <h1>A</h1> */}
          {/* <h2 className='logo_name'>ASHLY</h2> */}
          <img src={Logo} alt="Logo" className='image_sec' />  
        </div>
       
        
      </div>
      <div className="End-Section">
         <Link to="/input_form"><button className="button_hello" type="button">Say Hello</button></Link> 
      </div>
    </div>
  );
}

export default Header;
