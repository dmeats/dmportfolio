import React from 'react';
import './SkillsTopic.css'




const SkillsTopic= (props) => {
const{picture,skillname,skills}=props
//builds each project box with props info and 
//builds the layout for the modal box


var Skillsary = skills.split(',');
console.log(Skillsary[0])
    return(
        <div class="grid-item">
            <div class="sub-item1"><img src={picture} id='skillsiconn'></img></div>
            <div class="sub-item2">{skillname}</div>
            <div class="sub-item3">
           
            <ul class="demo">
            {Skillsary.map((e, index) => (
        <li>{e}</li>
    ))}
  </ul>
                </div>
      </div>
    )
}
export default SkillsTopic;
