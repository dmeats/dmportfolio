import React,{useContext,useRef,useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import useWindowDimensions from './usewindowsize'
import Homeicon from '../assets/images/home.png'
import Projectsicon from '../assets/images/projects.png'
import Skillsicon from '../assets/images/skills.png'
import xicon from '../assets/images/xicon.png'
import {APPLContext} from './../App'
import './nav.css'



const Nav = () => {
  const { height, width } = useWindowDimensions();
  const aPPLContext = useContext(APPLContext)
  const ElementRef = useRef([]);
  const closebuttonstyle = useRef('staticclosebtn');
  

  // allows the page to be reloaded and new updates to the state to be changed
  let  [,setState]=useState();
  
      function openNav() {
        
       
  
        closebuttonstyle.current='rotateopenclosebtn'
        setState({});
        document.getElementById("mySidenav").style.width = "93%";
        document.getElementById("mySidenav").style.height= "800px";
        
      }
      
      function closeNav() {
        closebuttonstyle.current='rotateclosebtn'
        setState({});
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.height= "800px";
      }
      useEffect(() => {
       
        
      });
      //changes the background of the selection in the sideout menu by creating an array
      //so that it can identify which skill has been selected by passing back a number
      const boxchanger = (indexnumber) =>{

      console.log('in boxchanger:'+indexnumber)

        let boxchangerArry=['mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked',
                        'mboxnotclicked']
        
console.log(boxchangerArry.length)
        for (var i = 0; i <= boxchangerArry.length; i++) {
          
          if (i===indexnumber){
         
            ElementRef.current[i]='mboxclicked'
          }
          else{
            
           ElementRef.current[i]='mboxnotclicked'
           console.log('changing '+i)
          }
          
      }
        //forces a reload of the sidenav to reflect the selection being selected
        setState({});
      } 

      

      if(width <= 414){
        
      //for mobile screen
      //&#10006; 'x' icon - for side nav replced by x image png
    return(
        <div className='Nav-container'>
            <div className='topnav'>
            <div  className="icon" onClick={() => openNav()}>&#9776;</div>
                    <div id="mySidenav" className='sidenav' onLoad={()=>closeNav()}>
                      <div className={closebuttonstyle.current} onClick={() => closeNav()}><img src={xicon} className='xicon'/></div>
                           <div id={ElementRef.current[0]}  onClick={() => boxchanger(0)} className='mboxspacing'><Link exact to={'/'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[0]}><img src={Homeicon} className='mobileiconstyle'/> Home</Link></div>
                           <div className='MobileLinks'><img src={Projectsicon} className='mobileiconstyle'/>&nbsp;Projects</div>
                           <div id={ElementRef.current[1]}  onClick={() => boxchanger(1)} className='mboxspacing'><Link exact to={'/MProjects/DigitalDashboard'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[1]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Dash board</Link></div>
                           <div id={ElementRef.current[2]}  onClick={() => boxchanger(2)} className='mboxspacing'><Link exact to={'/MProjects/IOTAutomation'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[2]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IOT Automation</Link></div>
                           <div id={ElementRef.current[3]}  onClick={() => boxchanger(3)} className='mboxspacing'><Link exact to={'/MProjects/DigitalBeatMachine'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[3]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital beat kit</Link></div>
                           <div id={ElementRef.current[4]}  onClick={() => boxchanger(4)} className='mboxspacing'><Link exact to={'/MProjects/GroceryApp'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[4]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grocery List App</Link></div>
                           <div id={ElementRef.current[5]}  onClick={() => boxchanger(5)} className='mboxspacing'><Link exact to={'/MProjects/IOTManufacturingLine'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[5]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IOT Manufacturing Line</Link></div>
                           <div id={ElementRef.current[6]}  onClick={() => boxchanger(6)} className='mboxspacing'><Link exact to={'/MProjects/EnergyCalculator'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[6]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Energy Calculator</Link></div>
                           <div id={ElementRef.current[7]}  onClick={() => boxchanger(7)} className='mboxspacing'><Link exact to={'/MProjects/AirQualityAPP'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[7]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air Quality APP</Link></div>
                           <div id={ElementRef.current[8]}  onClick={() => boxchanger(8)} className='mboxspacing'><Link exact to={'/MProjects/VegetablePlanner'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[8]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vegetable Planner</Link></div>
                           
                           <div id={ElementRef.current[9]}  onClick={() => boxchanger(9)} className='mboxspacing'><Link exact to={'/Skills'} style={{ textDecoration: 'none' }} className='MobileLinks' onClick={() => closeNav()} id={ElementRef.current[9]}><img src={Skillsicon} className='mobileiconskillsstyle'/>&nbsp;Skills</Link></div>
 
                        
                    </div>
           </div>
        </div>
        )
    }
    else{
      //for desktop screen
      return(
        
            <div className='desktopnav'>
                   <div className={aPPLContext.underlinee}></div>
            
                        <div className='homelink'><Link exact to={'/'} style={{ textDecoration: 'none' }} className='NavLinks' ><img src={Homeicon} className='desktopiconstyle' alt='home'/>&nbsp;Home</Link></div>
                        <div className='projectlink'><Link exact to={'/Projects'} style={{ textDecoration: 'none' }} className='NavLinks' ><img src={Projectsicon} className='desktopiconstyle' alt='project'/>&nbsp;Projects</Link></div>
                        <div className='skillslink'><Link exact to={'/Skills'} style={{ textDecoration: 'none' }} className='NavLinks' ><img src={Skillsicon} className='desktopiconstyle' alt='project'/>&nbsp;Skills</Link></div>
                   
           </div>
        
        )
    }
}
export default Nav;