import { useState, useRef } from "react"
import style from "./control.module.css"
export default function ControlTab({projects, setCurrent}) {

    function onItemClick(index) {
        setCurrent(projects[index])
    }
  
    return (
         <>
         <div id= {style.container}>
         <h1 className = {style.tab}>PROJECTS</h1>
         {projects.length < 1? <p>Project list is Empty</p>: <ul>
           {
             projects.map((item, index) => {
                return (
                    <button
                    onClick={() => onItemClick(index)}
                    className="w-full space-y-2 p-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
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