import React  from 'react';
import CreateProject from './Components/CreateProject/CreateProject';
import Nofify from './Components/Notify/Notify';
import { useState } from 'react';
import ControlTab from './Components/ControlTab/ControlTab';
import CurrentProject from './Components/CurrentProject/CurrentProject';

function App() {
let [currentProject, setCurrentProject] = useState(null);
let [projects, setProjects] = useState([]);

let me = new Set;

 return (
  <>
  <section className='sec'>

  <ControlTab projects = {projects}
  setCurrent = {setCurrentProject}/>
   
   <div>
   {currentProject? <CurrentProject activeProject = {currentProject} setActiveProject = {setCurrentProject}/>: <Nofify 
   projects = {projects} setProjects = {setProjects}
   setCurrent = {setCurrentProject}/>}
   </div>
  </section>
  </>
 )
 
}



export default App;
