import React from 'react';
import './TopHeader.css';
import './TopHeaderResponsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

function TopHeader() {
  return (
    <div className="top-header">
         <div className="contact_div">  
        <a href="mailto:ashlymargaret030@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /> <p className='maill'>ashlymargaret030@gmail.com</p></a>
        
        </div>
    </div>
  );
}

export default TopHeader