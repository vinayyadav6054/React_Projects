import React, { useEffect, useState } from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'

const App = () => {
  const [expenses, setExpenses] = useState([])

  const addExpense = (newExpense)=>{
    setExpenses((prevExpenses)=>[...prevExpenses, newExpense]);
    //console.log(expenses);
  }

  useEffect(()=>{
    console.log(expenses);
    
  },[expenses]);
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />

    </div>
  )
}

export default App;