import React, {useState,useContext} from 'react';
import {Switch,Route} from 'react-router-dom'
import Nav from './component/nav'
import Home from './component/Home'
import Projects from './component/Projects'
import MProjects from './component/MProjects'
import Skills from './component/Skills'
import CanvasStarfield from './component/CanvasStarfield'
import './App.css';

export const APPLContext = React.createContext({
  
  underlinee:'',
  aboutinfo:'',
 
  ChangeUnderline: ()  => {},
  ChangeAboutinfo: ()  => {},
  
});


function App() {

  const [underlinee, setunderlinee] = useState('about_underline')
  const [aboutinfo, setaboutinfo] = useState('container')
  
  
  return (

    <APPLContext.Provider value = {{
      underlinee,
      aboutinfo,
      setunderlinee,
      setaboutinfo,
      
      ChangeUnderline: underlinee => setunderlinee(underlinee),
      ChangeAboutinfo: aboutinfo => setaboutinfo(aboutinfo),
  
      }}>

    <div className="App">
      
      <Nav/>
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
      <CanvasStarfield/>
      <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/Projects'} component={Projects} />
            <Route exact path={'/MProjects/:projectapp'} component={MProjects} />
            <Route exact path={'/Skills'} component={Skills} />
      </Switch>
     
    </div>
    </APPLContext.Provider>
  );
}

export default App;
