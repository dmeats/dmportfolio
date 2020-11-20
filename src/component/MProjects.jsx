import React,{useContext,useRef} from 'react';
import { useParams} from "react-router";
//import {APPLContext} from './../App'

import MobileProjectItem from './MobileProjectItem'
import mdigitaldash from '../assets/images/digital_dash.png' 
import mgroceryapp from '../assets/images/groceryapp.jpg'
import mdrum_machine from '../assets/images/drum_machine.png'
import mIOT_manuf from '../assets/images/IOT_manuf.png'
import mAir_quality from '../assets/images/Air_quality.png'
import mpower_app from '../assets/images/power_app.png'
import mVegApp from '../assets/images/VegApp.png'
import zone_con from '../assets/images/zone_con.png'

const MProjects = () => {
    const { projectapp } = useParams()
    const REFprojectstring = useRef('')
    //console.log('hhhh'+projectapp)
    
    REFprojectstring.current = String(projectapp)
    console.log(REFprojectstring.current)
    //sets all project attributes to be used by ProjectItem

    //'underlinee' sets a style for projects
   // const aPPLContext = useContext(APPLContext)
  //  let underlinee = 'projects_underline'
  //  let aboutinfo = 'about-hide'
  //  aPPLContext.ChangeUnderline(underlinee)

   // aPPLContext.ChangeAboutinfo(aboutinfo)
   switch(REFprojectstring.current) {
    case 'DigitalDashboard':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mdigitaldash} projectname='Digital Dash Board' tech='Designed for desktop - React, CSS, SVG, JSON, JavaScript' imagestyle='l' TopicHeading='Technolgies used:' mobileimage={mdigitaldash} boxsize='#' demolink='https://dmeats.github.io/react-digital-dash-app/' buttonname='Demo'/>
                    </div>
            </div>
            </div>
        )
      break;
    case 'IOTAutomation':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={zone_con} projectname='Automation control App' tech='Vue, Node, Socket.io, CSS, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' mobileimage={zone_con} boxsize='#' demolink='#' buttonname='No-demo'/>
               </div>
            </div>
            </div>
        )
      break;
      case 'DigitalBeatMachine':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mdrum_machine} projectname='Digital Beat Kit' tech='React, CSS, HTML, JavaScript, audio' imagestyle='l' TopicHeading='Technolgies used:' mobileimage={mdrum_machine} boxsize='#' demolink='https://dmeats.github.io/drum-machine-mk3/' buttonname='Demo'/>
                    </div>
            </div>
            </div>
        )
      break;
      case 'GroceryApp':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mgroceryapp} projectname='Grocery App' tech='React, CSS, Bootsrap, JSON, JavaScript' imagestyle='l' TopicHeading='Technolgies used:' mobileimage={mgroceryapp} boxsize='#' demolink='https://dmeats.github.io/ed-grocerylist/' buttonname='Demo'/>
 
                    </div>
            </div>
            </div>
        )
      break;
      case 'IOTManufacturingLine':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mIOT_manuf} projectname='IOT Manufacturing Line App' tech='Designed for desktop - Vue, MySQL, Node, CSS, JSON, JavaScript,Express,API' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' mobileimage={mIOT_manuf} boxsize='modal-box' demolink='#' buttonname='No-demo'/>
                
                    </div>
            </div>
            </div>
        )
        break;
        case 'EnergyCalculator':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mpower_app} projectname='Power Energy App' tech='React, MySQL, CSS, SVG, JSON, JavaScript,API' imagestyle='twoimgmobilemodalimg' TopicHeading='Technolgies used:' mobileimage={mpower_app} boxsize='modal-box' demolink='#' buttonname='No-demo'/>
               
                    </div>
            </div>
            </div>
        )
      break;
      case 'AirQualityAPP':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mAir_quality} projectname='Air Quality Graphing App' tech='React, CSS, SVG, JSON, JavaScript' imagestyle='mobilemodalimg' TopicHeading='Technolgies used:' mobileimage={mAir_quality} boxsize='mobile-modal-box' demolink='#' buttonname='No-demo'/>
                
                    </div>
            </div>
            </div>
        )
      break;
      case 'VegetablePlanner':
        return(
            <div>
            
            <div className = 'test-container'>
                    <div className='mproject'>
                    <MobileProjectItem  picture={mVegApp} projectname='Vegetable Planner App' tech='Designed for desktop - CSS, JavaScript' imagestyle='desktopmodalimg' TopicHeading='Technolgies used:' mobileimage={mVegApp} boxsize='modal-box' demolink='https://dmeats.github.io/JavaScript-Vegetable-Planner-app/' buttonname='Demo'/>
               
                    </div>
            </div>
            </div>
        )
      break;
    default:
        console.log('madeithere'+projectapp)
      return(
       null
    )
  }
        
            
    
}
export default MProjects;