import React,{useContext} from 'react';
import {APPLContext} from './../App'
import SkillsTopic from './SkillsTopic'
import './skills.css'
import databaseimg from '../assets/images/tdatabase2.png' 
import paintimg from '../assets/images/tpaintboard2.png'
import codeimg from '../assets/images/monitor_keyboard.png'
import businessimg from '../assets/images/tbuss3.png'
import processimage from '../assets/images/ProcessMap.png'
import codescreen from '../assets/images/codescreen.png'
import paintdetail from '../assets/images/paintdetailimg.png'
import databasemodel from '../assets/images/dbmodel.png'

const Skills = () => {


    //sets all Skills attributes to be used by ProjectItem

    //'underlinee' sets a style for skills

    const aPPLContext = useContext(APPLContext)
    let underlinee = 'skills_underline'
    let aboutinfo = 'about-hide'
    aPPLContext.ChangeUnderline(underlinee)

    aPPLContext.ChangeAboutinfo(aboutinfo)

    return(
        <div>
        
            <div className = 'skillsgrid-container'>
            
                    <SkillsTopic  picture={databaseimg} skillname='Database' skills='SQL, MySQL, ORACLE, SQLSERVER, RESTFULL, REST, Modeling' />
                    <SkillsTopic  picture={paintimg} skillname='Graphic Design' skills='Blender, Gimp, InkSpace, PowerPoint' />
                    <SkillsTopic  picture={codeimg} skillname='Programming' skills='React, Vue, API, JSON, Nodejs, Javascript, VBA, Express, HTML, CSS, CSS-Grid, SQL, SVG' />
                    <SkillsTopic  picture={businessimg} skillname='Business' skills='Process Modeling, Stakeholder Engagement, Business Requirement Docs, Agile, Waterfall, QA-Testing, Excel, Powerpoint, Word,Visio' />
                
                    
            </div>
        </div>
    )
}
export default Skills;
