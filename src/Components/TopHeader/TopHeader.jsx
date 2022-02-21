import React from 'react';
import './TopHeader.css';
import './TopHeaderResponsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

function TopHeader() {
  return (
    <div className="top-header">
         <div className="contact_div">
        <div className="phone_chimp">
        <a href="tel:+971-545-102-909"><FontAwesomeIcon icon={faPhone} className="faPhone"/> <p className='Number'>+971-545-102-909 </p></a>
       
        </div>
        
        <div className="mail_chimp">
        <a href="mailto:ashlymargaret030@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /> <p className='maill'>ashlymargaret030@gmail.com</p></a>
        
        </div>
        
        </div>
    </div>
  );
}

export default TopHeader