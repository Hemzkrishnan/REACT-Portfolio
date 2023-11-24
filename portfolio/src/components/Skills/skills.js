import React from 'react';
import './skills.css';
import RESTApi from '../../assets/ui-design.png';
import CRUDApi from '../../assets/website-design.png';
import ToDoApi from '../../assets/app-design.png';

const Skills = () => {
    return(
       <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate Backend Developer with experience in creating REST / CRUD Api's using MVC pattern. I have good understanding of GCP inorder to deploy my projects. I have a grasp on JavaScript, HTML, CSS and also Web Designing.</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={RESTApi} alt="RESTApi" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>REST API</h2>
                <p>This is a sample REST API.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={CRUDApi} alt="CRUDApi" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>CRUD API</h2>
                <p>This is a sample CRUD API.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={ToDoApi} alt= "ToDoApi" className='skillBarImg'/>
            <div className="skillBarText">
                <h2>TODO API</h2>
                <p>This is a sample TODO API.</p>
            </div>
        </div>
      </div>
       </section>
    );
}

export default Skills;