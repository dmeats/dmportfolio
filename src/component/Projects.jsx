import React,{useContext} from 'react';
import {APPLContext} from './../App'
import './project.css'
import ProjectItem from './ProjectItem'
import digitaldash from '../assets/images/digital_dash.png' 
import groceryapp from '../assets/images/groceryapp.png'
import drum_machine from '../assets/images/drum_machine.png'
import IOT_manuf from '../assets/images/IOT_manuf.png'
import Air_quality from '../assets/images/Air_quality.png'
import power_app from '../assets/images/power_app.png'
import VegApp from '../assets/images/VegApp.png'
import zone_con from '../assets/images/zone_con.png'

const Projects = () => {

    //sets all project attributes to be used by ProjectItem

    //'underlinee' sets a style for projects
    const aPPLContext = useContext(APPLContext)
    let underlinee = 'projects_underline'
    let aboutinfo = 'about-hide'
    aPPLContext.ChangeUnderline(underlinee)

    aPPLContext.ChangeAboutinfo(aboutinfo)

    return(
        <div>
        
        <div className = 'Project-container'>
                <div className='project'>
                <ProjectItem  picture={digitaldash} projectname='Digital Dash Board' tech='React, CSS, SVG, JSON, JavaScript' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={digitaldash} boxsize='modal-box' demolink='https://dmeats.github.io/react-digital-dash-app/' buttonname='Demo'/>
                <ProjectItem  picture={groceryapp} projectname='Grocery App' tech='React, CSS, Bootsrap, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={groceryapp} boxsize='mobile-modal-box' demolink='https://dmeats.github.io/ed-grocerylist/' buttonname='Demo'/>
                <ProjectItem  picture={drum_machine} projectname='Digital Beat Kit' tech='React, CSS, HTML, JavaScript, audio' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={drum_machine} boxsize='mobile-modal-box' demolink='https://dmeats.github.io/drum-machine-mk3/' buttonname='Demo'/>
                <ProjectItem  picture={IOT_manuf} projectname='IOT Manufacturing Line App' tech='Vue, MySQL, Node, CSS, JSON, JavaScript,Express,API' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={IOT_manuf} boxsize='modal-box' demolink='#' buttonname='No-demo'/>
                <ProjectItem  picture={Air_quality} projectname='Air Quality Graphing App' tech='React, CSS, SVG, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={Air_quality} boxsize='mobile-modal-box' demolink='#' buttonname='No-demo'/>
                <ProjectItem  picture={power_app} projectname='Power Energy App' tech='React, MySQL, CSS, SVG, JSON, JavaScript,API' imagestyle='twoimgmobilemodalimg' TopicHeading='Technolgies used:' modalimage={power_app} boxsize='modal-box' demolink='#' buttonname='No-demo'/>
                <ProjectItem  picture={VegApp} projectname='Vegetable Planner App' tech='CSS, JavaScript' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' modalimage={VegApp} boxsize='modal-box' demolink='https://dmeats.github.io/JavaScript-Vegetable-Planner-app/' buttonname='Demo'/>
                <ProjectItem  picture={zone_con} projectname='Automation control App' tech='Vue, Node, Socket.io, CSS, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' modalimage={zone_con} boxsize='mobile-modal-box' demolink='#' buttonname='No-demo'/>
               
                </div>
        </div>
        </div>
    )
}
export default Projects;
