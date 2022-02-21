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
                    <h3>{props.tools_title}</h3>
                </div>
                <div className="tools_desc">
                    <ul className="u_list">
                        <li>{props.list_item1}</li>
                        <li>{props.list_item2}</li>
                        <li>{props.list_item3}</li>
                        <li>{props.list_item4}</li>
                        <li>{props.list_item5}</li>
                        <li>{props.list_item6}</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Position;
