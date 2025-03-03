import React, { useState } from 'react'

const TodoInput = ({addTask}) => {
  const [task, setTask] = useState('')
  const handleAddTask = ()=>{
    if(task.trim() ===  ""){
      alert("Please enter a task");
      return;
    } 
    addTask(task);
    setTask('');
  }
  ;
  return (
    <div className='w-96 bg-white rounded-lg p-4 '>
        <label>Enter the Task:</label>
        <div className='flex items-center'>
          <input className='w-[60%] ml-4 border border-2 border-zinc-400 rounded-md ' type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
          <button onClick={handleAddTask} className='w-20 text-white rounded-full bg-blue-500 hover:bg-blue-700 text-center items-center'>Add Task</button>
        </div>
      </div>
  )
}

export default TodoInput