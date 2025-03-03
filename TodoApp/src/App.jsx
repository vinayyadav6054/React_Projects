import React, { useState } from 'react'
import TodoInput from './Components/TodoInput'

const App = () => {
  const [tasks, setTasks] =useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(tasks);
    

  }
  return (
    <div className='w-full h-screen bg-violet-900 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-4'>To Do App</h1>
      <TodoInput addTask={addTask} />
    </div>
  )
}

export default App