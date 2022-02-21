import React from 'react';
import '../Additional_Footer/Additional_Footer.css';
import '../Additional_Footer/AdditionalResponsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Additional_Footer() {
  return (
      <div className="container_footer_section">
    <div className="Additional_Footer">
        <div className="address_sec">
        <a href="#Additional_Footer"><FontAwesomeIcon icon={faLocationDot} className="faLocationDot"/></a>
        <p>Abu Dhabi,UAE</p>
        </div>
        <div className="phone_sec">
        <a href="#Additional_Footer"><FontAwesomeIcon icon={faPhone} className="faPhone"/></a>
        <p>99999999</p>
        </div>
        <div className="email_sec">
        <a href="#Additional_Footer"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope"/></a>
        <p>ashlymargaret030@gmail.com</p>
        </div>
    </div>
    </div>
  );
}

export default Additional_Footer;