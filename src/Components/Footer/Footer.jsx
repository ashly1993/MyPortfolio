import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Footer/Footer.css';
import '../Footer/FooterResponsive.css';


function Footer() {
  return (
    <div className='Footer_Section'>
      <div className="quotation_section">
        Living, learning, & leveling up one day at a time.
      </div>
      <div className="ScocialMedia_Section">

        <a href="https://www.facebook.com/ashly.margaret.777/" target={'_blank'}><FontAwesomeIcon icon={faFacebookF} className="faFacebook" /></a>
        <a href="#ScocialMedia_Section"><FontAwesomeIcon icon={faTwitter} className="faTwitter" /></a>
        <a href="https://www.linkedin.com/in/ashly-margaret-149a56168/"><FontAwesomeIcon icon={faLinkedin} className="faLinkedin" /></a>
        <a href="#https://instagram.com/ashly_margaret"><FontAwesomeIcon icon={faInstagram} className="faInstagram" /></a>


      </div>
     
    </div>
  );
}

export default Footer;
