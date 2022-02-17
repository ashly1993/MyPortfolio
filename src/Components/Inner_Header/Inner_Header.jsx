import React from 'react';
import InnerLogo from '../../images/Logo1.png';
import CloseButton from '../../images/close.png';
import '../Inner_Header/Inner_Header.css';
import { Link } from 'react-router-dom';

function Inner_Header() {
  return (
    <div className='inner_header'>
      <div className="first_logo_section">
        <img src={InnerLogo} alt="innerlogo"/>
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
