
export default function ProjectTasks({tasks, setActiveProject}) {

    function onRemove(item) {
     setActiveProject((prev) => {
        let newActive = {...prev};
        newActive.projectTasks.delete(item);
        return newActive
     })
    }

    return (
        <>
       <section className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">Tasks</h3>
      <ul className="list-disc list-inside space-y-2">
        {Array.from(tasks).map((item, index) => (
          <li key={index} className="text-gray-700 flex items-center justify-between space-x-3">
            <p className="flex-1">{item}</p>
            <button onClick={() => {onRemove(item)}}
            className="text-red-500 bg-transparent border border-red-500 px-2 py-1 text-xs font-medium rounded hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
        </>
    )
}