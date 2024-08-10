import { useRef, useState, useEffect } from "react"
import ProjectTasks from "../ProjectTask/ProjectTask"

export default function CurrentProject({activeProject, setActiveProject}) {
   let enteredTask = useRef();
   let [addedTask, setAddedTask] = useState(false);
  console.log(activeProject)

  function onAddTask() {
    setAddedTask(true);
     setActiveProject((prev) => {
        let newActive = {...prev};
        newActive.projectTasks.add(enteredTask.current.value);
        return newActive
     })
  }
   
  useEffect(() => {
    if(addedTask) {
        enteredTask.current.value = ``;
    }
    setAddedTask(false)
  }, [addedTask])
  
    return (
        <>
        <section className="grid grid-cols-1 gap-1 w-auto p-4 bg-slate-300">
            <button className="bg-red-600 text-white py-1 px-3 text-sm rounded-lg hover:bg-red-300
            hover:ring-2 hover:ring-red-600 justify-self-end">
                Delete Project
            </button>

          <div className="flex space-x-4 my-2 text-white">
            <p>Project-Name</p>
            <span>:</span>
            <p>{activeProject.projectName}</p>
          </div>

          <div className="flex space-x-4 my-2 text-white">
            <p>Project-Description</p>
            <span>:</span>
            <p>{activeProject.description}</p>
          </div>

          <div className="flex space-x-4 my-2 text-white">
            <p>Dead-Line</p>
            <span>:</span>
            <p>{activeProject.dueDate}</p>
          </div>
           
           <div className="flex space-x-4 my-2 text-white w-max">
           <textarea ref={enteredTask} placeholder="Enter your task" className="text-black"></textarea>
           <button className="bg-green-600 text-white py-0 px-2 text-sm rounded-lg hover:bg-blue-300
            hover:ring-2 hover:ring-blue-600" onClick={onAddTask}>Add task</button>
           </div>
            
            <div>
            {activeProject.projectTasks.size < 1? <p>No task has been added to Project</p>: 
           <ProjectTasks tasks={activeProject.projectTasks} 
           setActiveProject = {setActiveProject}/>}
            </div>
           
          </section>
        </>
    )
}