import React from 'react';
import InnerLogo from '../../images/Asset 1.png';

import './Inner_Header.css';
import { Link } from 'react-router-dom';

function Inner_Header() {
  return (
    <div className='inner_header'>
      <div className="first_logo_section">
        <img src={InnerLogo} className="innerlogo" alt="innerlogo"/> 
      </div>
      <div className="center_section">

      </div>
      <div className="end_section">
      <Link to="/"><button className="button_hello" type="button">Back</button></Link> 
      </div>
    </div>
  );
  
}

export default Inner_Header;
