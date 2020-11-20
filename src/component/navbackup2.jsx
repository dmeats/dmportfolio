import React from 'react'
import {Link} from 'react-router-dom'
//import {APPLContext} from './../App'
import './nav.css'


const Nav = () => {
    
    function myFunction() {
        var x = document.getElementById("linkbody");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }


    return(
        <div className='Nav-container'>
            <div className='topnav'>
            <div  className="icon" onClick={() => myFunction()}>&#9776;</div>
                    <div id="linkbody">
                        <Link exact to={'/'} style={{ textDecoration: 'none' }} activeStyle={{color: "blue"}} className='NavLinks' onClick={() => myFunction()}>Home</Link><br></br>
                        <Link exact to={'/Projects'} style={{ textDecoration: 'none' }} className='NavLinks' onClick={() => myFunction()}>Projects</Link><br></br>
                        <Link exact to={'/Skills'} style={{ textDecoration: 'none' }} className='NavLinks' onClick={() => myFunction()}>Skills</Link><br></br>
                    </div>
           </div>
        </div>
        )
}
export default Nav;