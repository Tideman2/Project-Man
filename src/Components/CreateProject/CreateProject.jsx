import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import style from "./create.module.css"


export default function CreateProject({projects, setProjects, setCreateProject, setCurrent}) {
    let projectName = useRef();
    let projectDescription = useRef();
    let dueDate = useRef();
    let [done, setDone] = useState(false);
     
    function onSave() {
        setDone(true)
        setProjects((prev) => {
            console.log(`prev`,prev);
            let newProject = [...prev];
            const name = projectName.current.value;
            const discription = projectDescription.current.value;
            const date = dueDate.current.value
            let project = {
                projectName: name,
                description: discription,
                dueDate: date,
                projectId: uuidv4(),
                projectTasks: new Set(),
            };
            newProject.push(project);
            console.log(newProject);
            // Clear input fields by setting them to an empty string
       
            return newProject;
        });
    }

    function onCancle() {
     if(projects.length > 0 ) {
        setCurrent(projects[0])
     } else {
        setCreateProject(false)
     }
      }

    useEffect(() => {
       if(done) {
        projectName.current.value = ``;
        projectDescription.current.value = ``;
        dueDate.current.value = ``;
        setDone(false)
       }
       
    }, [done])
    

   
    return (
       <>
       hg
       <section id= {style.container}>  
        <div>
            <button className= {style.btn} onClick={onCancle}>Cancle</button>
            <button className= {style.btn} onClick={onSave}>Save</button>
        </div>
         <h1 >Create A Project</h1>
       <div >
        <h1 >Project name:</h1>
        <input ref={projectName} type="text" ></input>
        </div>

        <div>
        <h2 >Project Discription:</h2>
        <input ref={projectDescription} type="text" ></input>
        </div>

        <div>
        <h2 >Select your Due-Date:</h2>
        <input ref={dueDate} type="date" ></input>
        </div>
       </section>
       </> 
    )

   
}