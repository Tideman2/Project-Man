import { useState, useRef } from "react"
import Nofify from "../Notify/Notify";
import style from "./control.module.css"
export default function ControlTab({projects, setCurrent, }) {

    function onItemClick(index) {
        setCurrent(projects[index])
    }

    function onAddProject() {
       setCurrent(null);
    }
  
    return (
         <>
         <div id= {style.container}>
         <h1 className = {style.tab}>PROJECTS</h1>
         <button className="bg-black text-white font-bold my-2 py-2 px-3 text-sm rounded-lg
             hover:bg-green-200 hover:ring-2 hover:ring-green-600 w-2/5" onClick={onAddProject}>Add Project</button>
         {projects.length < 1? <p className="text-center font-bold">Project list is Empty</p>: <ul>
           {
             projects.map((item, index) => {
                return (
                    <button key={index}
                    onClick={() => onItemClick(index)}
                    className="w-full space-y-2 p-3 my-1 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    {item.projectName}
                  </button>
                )
             })
           }
         </ul> }
         </div>
          
         </>
    )
}