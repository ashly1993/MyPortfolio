import React from 'react';
import '../Banner/Banner.css';
import '../Banner/BannerResponsive.css';
import Profile_Image from '../../images/Asset 2.png';



function Banner() {
  return (
    <div className='Banner_Section'>
      <div className="Banner_Heading">
        <h1>Front-end Developer & SEO Analyst</h1>
      </div>
      <div className="Banner_Sub_Heading">
        <h2>I design and code beautifully simple things, and I love what I do.</h2>
      </div>
      <div className="Profile_Image_Section">
        <img src={Profile_Image} alt="profile_avatar" className='profile_img' />
      </div>
    
    </div>

  );
}

export default Banner;
