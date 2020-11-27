import React,{useContext} from 'react';
import './Home.css'
import {APPLContext} from '../App'

const About = () => {
    const aPPLContext = useContext(APPLContext)
    let underlinee = 'about_underline'
    let aboutinfo = 'container'
    aPPLContext.ChangeUnderline(underlinee)

    return(
        <div className={aboutinfo}>
                <div className='Name'>
                <p>DAVID MEATS</p>
                </div>
                <div className='Title'>
                <p>FULLSTACK DEVELOPER</p>
                </div>
                <div className='About'>
                
                </div>
        </div>
    )
}
export default About;