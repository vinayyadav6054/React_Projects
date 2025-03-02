import React from 'react'

const CounterControls = ({increment, decrement, reset}) => {

    
  return (
    <div className='flex justify-center gap-4'>
        <button onClick={increment} className='w-[15%] h-8 rounded-full bg-sky-300 text-lg hover:bg-sky-500 transition ease-in-out duration-300'>
            +
        </button>
        <button onClick={decrement} className='w-[15%] h-8 rounded-full bg-red-300 
        text-lg hover:bg-red-500 transition ease-in-out duration-300'>
            -
        </button>
        <button onClick={reset} className='w-[15%] h-8 rounded-full bg-red-300 text-stone-900
        text-lg hover:bg-red-500 transition ease-in-out duration-300'>Reset</button>
    </div>
  )
}

export default CounterControls