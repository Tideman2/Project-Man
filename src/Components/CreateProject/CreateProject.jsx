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
       <section className="flex flex-col space-y-2 p-2">  
        <div className="grid grid-cols-2 justify-items-start">
            <button className="bg-red-400 py-1 px-3 text-sm rounded-lg
             hover:bg-red-200 hover:ring-2 hover:ring-red-600" onClick={onCancle}>Cancle</button>
            <button className="bg-green-400 py-1 px-3 text-sm rounded-lg
             hover:bg-green-200 hover:ring-2 hover:ring-green-600" onClick={onSave}>Save</button>
        </div>
         <h1 className="text-center text-lg font-bold">Create A Project</h1>

       <div className="space-y-1">
        <h1 >Project name:</h1>
        <input ref={projectName} type="text" 
        className="w-full p-2 border border-gray-300 rounded-md 
        shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"></input>
        </div>

        <div className="space-y-1">
        <h2 >Project Discription:</h2>
        <input ref={projectDescription} type="text" 
         className="w-full p-2 border border-gray-300 rounded-md 
         shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"></input>
        </div>

        <div className="space-y-1">
        <h2 >Select your Due-Date:</h2>
        <input ref={dueDate} type="date" className="w-full p-3 border border-gray-300 rounded-md shadow-sm
         bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-200"></input>
        </div>
       </section>
       </> 
    )

   
}