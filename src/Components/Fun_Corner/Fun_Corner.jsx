import React from 'react'
import Inner_Header from '../Inner_Header/Inner_Header';
import { Link } from 'react-router-dom';
import './Fun_Corner.css';
import SpacemanPreview from '../../images/spaceman1.png';

function fun_corner() {
  return (
    <div className='fun_corner'>
     <div className="h">
         <Inner_Header />
     </div>
     <div class="container">
     <div class="project_view1">
     {/* <Link to="../../../public/spaceman/spaceman.html"> <img className='space_man_prevw' src={SpacemanPreview} alt="spaceman" /> </Link>  */}
     {/* <a href="./../../public/spaceman/spaceman.html"><img className='space_man_prevw' src={SpacemanPreview} alt="spaceman" /></a> */}

     <Link to="/spaceman">
    <img src={SpacemanPreview} className="space_man_prevw" />
   </Link>
     </div>

    </div>
    </div>
  )
}

export default fun_corner;