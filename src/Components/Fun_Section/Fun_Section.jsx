import React from 'react';
import './Fun_Section.css';
import { Link } from 'react-router-dom';

function Fun_Section() {
  return (
    <div className='Fun_Section'>
      <Link to="/fun_corner">  <button className='fun_btn'>Fun Corner</button></Link> 
    </div>
  )
}

export default Fun_Section;