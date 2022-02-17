import React from 'react';
import '../TopHeader/TopHeader.css';
import '../TopHeader/TopHeaderResponsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

function TopHeader() {
  return (
    <div className="Top_Header">
         <div className="contact_div">
        <div className="phone_chimp">
        <a href="tel:+971-545-102-909"><FontAwesomeIcon icon={faPhone} className="faPhone"/> <span className='Number'>+971-545-102-909</span> </a>
       
        </div>
        
        <div className="mail_chimp">
        <a href="mailto:ashlymargaret030@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /> <span className='maill'>ashlymargaret030@gmail.com</span></a>
        
        </div>
        
        </div>
    </div>
  );
}

export default TopHeader