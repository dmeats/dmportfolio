import React from 'react';
import './mobileprojectitem.css'



const MobileProjectItem = (props) => {

//builds each project box with props info and 
//builds the layout for the modal box



   const{ picture, projectname,tech,imagestyle,TopicHeading,mobileimage,boxsize,demolink,buttonname} = props

  
  
    return(
        <div >
            
      
        <div class="mgrid-container">
            <div className='mitem1'>
                <h3>{projectname}</h3>
            </div>
            
            <div className='mitem3'>                  
                <img src={mobileimage}  className='mobileimagesetting'/>
            </div>
            <div className='mitem4'>                
                <p ><h2>{TopicHeading}</h2>{tech}</p>
            </div> 
            
            <div className='mitem5'> 
            <div>               
            <button className='demobutton'><a href={demolink} className='demobuttonlink'><p>{buttonname}</p></a></button>
            </div>
            </div> 
                    
       </div>           
        
                   
                   
        </div>
    )
}
export default MobileProjectItem;
