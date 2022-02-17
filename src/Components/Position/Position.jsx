import React from 'react';
import '../Position/Position.css';
import '../Position/PositionResponsive.css';



function Position(props) {
    return (
        <div className='Position_Section'>
            
            <div className="description">
            <div className="title">
                <h2>{props.position_title}</h2>
            </div>
                <div className="desc-text">
                   <p>{props.position_desc}</p>
                </div>
            </div>
            <div className="sub_section">
                <div className="sub_dec_name">
                    <h3>{props.sub_description}</h3>
                </div>
                <div className="sub_dec">
                    <p>{props.sub_desc_items}</p>
                </div>
            </div>
            <div className="tools">
                <div className="tools_title">
                    <h3>Design Tools:</h3>
                </div>
                <div className="tools_desc">
                    <ul className="u_list">
                        <li>Balsamiq Mockups</li>
                        <li>Balsamiq </li>
                        <li>Invision</li>
                        <li>Marvel</li>
                        <li>Pen & Paper</li>
                        <li>Sketch</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Position;
