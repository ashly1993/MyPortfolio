import React from 'react';
import "../Contact/Contact.css"
import "../Contact/ContactResponsive.css";
import Inner_Header from '../Inner_Header/Inner_Header';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import $ from 'jquery';
import { useState , useEffect } from 'react';


function Contact() {

    useState(0);

    useEffect(() => {
        $("#error_name").hide();
        $("#email_error").hide();
        $("#emailinvalid").hide();
        $("#yourmessage").hide();
    });

    const submit = () => {

        const UserName = $("#error_name").val();
        const email_section = $("#email_error").val();
        const Reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const YourMessage = $("#yourmessage").val();

        if (!UserName) {
            $("#error_name").show();
        }
        else if (!email_section) {
            $("#email_error").show();
        }
        else if (Reg.test(email_section) === false) {
            $("#emailinvalid").show();
        }
        else if (!YourMessage) {
            $("#yourmessage").show();
        }
       /*  else if (UserName || YourEmail || YourMessage) {
            let path = `/Home`;
            this.props.history.push(path);
        } */
    }



/* 
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
     /*   .fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        })  ;  */
 
    



    return (

        <div className="contact_container">
            <div className="header_container">
                <Inner_Header />
            </div>
            <div className="container_contact_sec">
                <div className="for_title">
                    <h1 className='a'>Thanks for taking the time to reach out.<br />
                        How can I help you today? </h1>
                </div>
                <div className="center_box">
                    <div className="container">
                         {/* <form id="myForm" ref={form} onSubmit={sendEmail}>  */}
                         <form id="myForm"> 
                            <div className="row">
                                <div className="first_name">
                                    <label> Name </label>
                                </div>
                                <div className="first_follow">
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                    <span id='error_name'>Enter Your Name</span> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="email">
                                    <label> Email </label>
                                </div>
                                <div className="email_follow">
                                    <input type="email" id="email" name="email" placeholder="Your email.." />
                                    <span id='email_error'>Enter Your Email</span> <br />
                                    <span id='emailinvalid'>Enter Your Valid Email</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="section_msg">
                                    <label> Message </label>
                                </div>
                                <div className="section_msg_follow">
                                    <textarea name="subject" placeholder="Write something.."></textarea>
                                    <span id='yourmessage'>Enter Your Message</span>
                                </div>
                            </div>
                            <div className="row_button">
                                {/* <input type="submit" value="Submit" onClick={() => submit()} /> */}
                                <input type="submit" value="Submit" onClick={() => submit()} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}



















export default Contact;
