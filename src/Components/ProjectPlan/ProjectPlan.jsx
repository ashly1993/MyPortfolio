import React from 'react';
import Inner_Header from '../Inner_Header/Inner_Header';
import '../ProjectPlan/ProjectPlan.css';
import '../ProjectPlan/ProjectResponsive.css';
import $ from 'jquery';
import { useEffect } from 'react';


function ProjectPlan() {

    useEffect(() => {
        $("#name_error").hide();
        $("#email_error").hide();
        $("#emailinvaliderror").hide();
        $("#type_error").hide();
        $("#message_error").hide();
    });

    const submit = () => {

        const Username = $("#fname").val();
        const Email = $("#email_id").val();
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const ProjectType = $("#type_error").val();
        const MessageType = $("#message_error").val();

        if (!Username) {
            $("#name_error").show();
        }
        else if (!Email) {
            $("#email_error").show();
        }
        else if (reg.test(Email) === false) {
            $("#emailinvaliderror").show();
        }
        else if (!ProjectType) {
            $("#type_error").show();
        }
        else if (!MessageType) {
            $("#message_error").show();
        }
        else if (Username || Email || ProjectType || MessageType) {
            let path = `/Home`;
            this.props.history.push(path);

        }
    }
    return (



        <div className="container_for_project">
            <div className="project_header">
                <Inner_Header />
            </div>
            <div className="project_container">
                <div className="project_title">
                    <h1 className='a'>I’m excited to learn about your project.<br />
                        Ready to get started? </h1>
                </div>

                <div className="project_center_box">
                    <div className="project_container">



                        <form>

                            <div className="project_row">
                                <div className="your_name">
                                    <label> Name </label>
                                </div>
                                <div className="name_follow">
                                    <input type="text" id="fname" name="firstname" autofocus placeholder="Your name.." />
                                    <span id='name_error'>Enter Your Name</span>
                                </div>
                            </div>

                            <div className="project_row">
                                <div className="project_email">
                                    <label> Email </label>
                                </div>
                                <div className="project_email_follow">
                                    <input type="email" id="email_id" name="firstmail" placeholder="Your email.." />
                                    <span id='email_error'>Enter Your Email</span>
                                    <label htmlFor="" id="emailinvaliderror" className="errormsg">Email Field is Invalid</label>
                                </div>
                            </div>

                            <div className="project_row">
                                <div className="project_type">
                                    <label>Type Of Project</label>
                                </div>
                                <div className="project_type_follow">
                                    <select name='typeselect' required>
                                        <option value="0" disabled selected hidden ></option>
                                        <option name="type" value="1">Responsive Design</option>
                                        <option name="type" value="2">Web App</option>
                                        <option name="type" value="3">Mobile App</option>
                                    </select>
                                    <span id='type_error'>Choose Type Of Your Project</span>
                                </div>
                            </div>

                            {/* <div className="project_row">
                            <div className="project_budget">
                                <label>Type Of Project</label>
                            </div>
                            <div className="project_budget_follow">
                                <select name="somename" required>
                                    <option value="0" disabled selected hidden ></option>
                                    <option value="one">$5000 - $10,000</option>
                                    <option value="one">$10,000 - $25,000</option>
                                    <option value="one">$25,000+</option>
                                </select>
                            </div>
                        </div> */}

                            <div className="project_row">
                                <div className="project_section_msg">
                                    <label> Additional Details </label>
                                </div>
                                <div className="project_msg_follow">
                                    <textarea name="subject" placeholder="Write something.."></textarea>
                                    <span id='message_error'>Write Your Message Here</span>
                                </div>
                            </div>
                            <div className="project_row_button">
                                <input type="submit" value="Submit" onClick={() => submit()} />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

window.onload = function () {
    document.getElementById("fname").focus();
};


export default ProjectPlan;
