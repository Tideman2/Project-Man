import { useState } from "react";
import CreateProject from "../CreateProject/CreateProject";
import style from "./notify.module.css";

export default function Nofify({projects, setProjects, setCurrent}) {
let [createProject, setCreateProject] = useState(false);

 function onButtonClick() {
    setCreateProject(true);
    console.log(`clicked`);
 }

if(createProject) {
    return <CreateProject projects={projects} setProjects={setProjects}
    setCreateProject = {setCreateProject}
    setCurrent = {setCurrent}/>
}

    return (
        <>
        <div className= {style.contain}>
          <h1>Select a Project Or create a New one</h1>
            <button onClick={onButtonClick}>Create Project</button>
        </div>
        </>
    )
}