import React from 'react'

const TodoList = ({tasks, deleteTask}) => {
  return (
    <div className='w-[50%] h-[40%] bg-white rounded-md mt-3 p-3 '>
      {tasks.length === 0 ? (
        <p>No tasks added yet</p>
      ) : (
        tasks.map((task, index)=>(
          <div key={index} className='flex justify-between items-center '>
            <h1 className='text-zinc-900 border-b py-2'>{task}</h1>
            <button onClick={() =>deleteTask(index)} className='text-xl'>❌</button>
          </div>
        ))
      )}
      
    </div>
  )
}

export default TodoList