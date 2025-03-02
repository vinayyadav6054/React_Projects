import React, { useState } from 'react'
import CounterControls from './Components/CounterControls';
import CounterDisplay from './Components/CounterDisplay';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  } 

  const decrement = () =>{
    if(count === 0){
      return;
    }
    setCount(count-1);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} reset={reset}/>
    </div>
  )
}

export default App