import { useState } from "react";
import Connect from '../Connect/Connect';
import './InputContact.css';
import Inner_Header from '../Inner_Header/Inner_Header';
import emailjs from 'emailjs-com';
import $ from 'jquery';
import React, { useRef } from 'react';






const InputContact = () => {
  const [values, setValues] = useState({
    yourname: "",
    email: "",
    message : "",
  });



  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Message",
      errorMessage: "message should be 3-50 characters!",
      label: "Message",
      required: true,
    },
  ];


  console.log("re-rendered");
  const handleSubmit = (e)=> 
  {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);




  
 // ***  Email Js  code start here  // ***

 const form = useRef();

 const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm('service_tvkjw9n', 'template_cwubnvf', form.current, 'user_TtLqoMuGAnLMHgvdTzKSN')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
 };

 var data = {
     service_id: 'service_tvkjw9n',
     template_id: 'template_cwubnvf',
     user_id: 'user_TtLqoMuGAnLMHgvdTzKSN',

 };
 $.ajax('https://api.emailjs.com/api/v1.0/email/send',
     {
         type: 'POST',
         data: JSON.stringify(data),
         contentType: 'application/json'
     })
     .done(function () {
         alert('Your mail is sent!');
     })
      /* .fail(function (error) {
         alert('Oops... ' + JSON.stringify(error));
     });
 */


// *** Email Js Code End Here  //*** 

 

  return (

    <div className="form_container">
  <div className="form_header_container">
  <Inner_Header />
  </div>
  <div className="form_title">
 <h1 className='form_title_heading'>Thanks for taking the time to reach out.<br /> How can I help you today? </h1>
 </div>

<div className="app">

<form id="myForm" ref={form} onSubmit={handleSubmit,sendEmail}>

{inputs.map((input) => (
<Connect key={input.id} {...input} value={values[input.name]} onChange={onChange} />
  ))}
  
<button className="form_button">Submit</button>
</form>
</div>
</div>
 );
};

export default InputContact;
