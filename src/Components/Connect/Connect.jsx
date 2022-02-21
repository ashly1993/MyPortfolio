import React from 'react';
import { useState } from "react";
import './Connect.css';

const Connect =(props) =>{

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
      setFocused(true);
    };


  return (
  <div className="connect_form">
  
      <label className='label_element'>{label}</label> 
  <input 
  {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
            inputProps.name === "message" && setFocused(true)
          }
          focused={focused.toString()} 
  />      
 
  <span>{errorMessage}</span> 
  </div>
  
  );
};

export default Connect;


