import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Position from '../Position/Position';
import TopHeader from '../TopHeader/TopHeader';
import './Home.css';
import './HomeResponsive.css';

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
               <td><Position position_title = "Web Developer" position_desc ="I enjoy bringing ideas to life in the browser by writing code from scratch."  sub_description = "Languages I speak:" sub_desc_items ="HTML, JavaScript, CSS,React Js,Jquery" tools_title="Desiging Tools:" list_item1="Pen & Paper" list_item2="VS Code" list_item3="Github" list_item4="Git" list_item5="Bootstrap" list_item6="Figma" list_item7="vercel"/></td>
               <td><Position position_title ="SEO Analyst" position_desc = "The main goal of SEO is to be able to help webpages rank in the first page of Google search results pages." sub_description ="Things I Manage:" sub_desc_items ="Title, Description,Backlink,Directory Submissions,Check Website Errors,Review Keyword Rankings,Competitor Analyis" tools_title="SEO Tools:" list_item1="Ahrefs " list_item2="Moz" list_item3="AI-Content-Generator" list_item4="Plagiarism checker"  /></td>   
                </tr>
                </table>
            </div>
            <div className="Footer_Component">
                <Footer />
            </div>
          
        </div>
    );
}

export default Home;
