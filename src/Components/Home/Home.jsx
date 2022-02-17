import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Additional_Footer from '../Additional_Footer/Additional_Footer';
import Banner from '../Banner/Banner';
import Conversation from '../Conversation/Conversation';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Home/Home.css';
import '../Home/HomeResponsive.css';
import Position from '../Position/Position';
import TopHeader from '../TopHeader/TopHeader';

function Home() {
    return (
        <div className='Home_Section'>
            <div className="Top_Header_Coponent">
                <TopHeader />
            </div>
            <div className="Header_Component">
                <Header />
            </div>
            <div className="Banner_component">
                <Banner />
            </div>
            <div className="About_component">
                <AboutMe />
            </div>
            <div className="Postion_Component">
                <table className='pos_table'>
                <tr>
               <td><Position position_title = "Developer" position_desc ="Having fun bringing ideas to life in the browser is what I enjoy most about coding."  sub_description = "Languages I speak:" sub_desc_items ="HTML,JavaScript,CSS"/></td>
               {/* <td><Position position_title = "Developer" position_desc ="Having fun bringing ideas to life in the browser is what I enjoy most about coding."  sub_description = "Languages I speak:" sub_desc_items ="HTML,JavaScript,CSS"/></td> */}

                <td><Position position_title ="SEO Analyst" position_desc = "Search engine optimization is the process of improving the quality hhaak ghuhhjj" sub_description ="Things I designing:" sub_desc_items ="Title,Description,Backlinks"/></td>   
                </tr>
                </table>
            </div>

            <div className="Conversation_Component">
                <Conversation />
            </div>
            <div className="Footer_Component">
                <Footer />
            </div>
          
        </div>
    );
}

export default Home;
