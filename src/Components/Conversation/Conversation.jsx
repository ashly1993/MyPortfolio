import React from 'react';
import { Link } from 'react-router-dom';
import '../Conversation/Conversation.css';
import '../Conversation/Conversationresponsive.css';
import Inner_Header from '../Inner_Header/Inner_Header';

function Conversation() {
  return (
    <div className='conversation'>
     
      <div className="conver_container">
        <div className="conv_title">
          <h1>Start a project?</h1>
        </div>
        <div className="conv_desc">
          <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
        </div>
        <div className="butondiv">
      <Link to="/project_plan"><button className='btn'>Let's Do This</button></Link>
        </div>
      </div>
    </div>

  );
}

export default Conversation;
