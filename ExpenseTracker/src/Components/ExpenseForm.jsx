import React, { useState } from 'react'

const ExpenseForm = ({addExpense}) => {
  const [amount, setAmount] = useState('');
  const [ description, setDescription] = useState('');
  const [category, setCategory] = useState('food');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount, description, category);
    if(!amount || !description || !category){
      alert("Please fill all the fields");
      return;
    }
    addExpense({amount: Number(amount), description, category});
    setAmount('');
    setDescription('');
    setCategory('food')
    
  }

  return (
    <div className=' w-[40%] gap-5 flex flex-col justify-center items-center bg-white p-5 shadow-md rounded-md'>
      <label className="font-bold">Enter the Amount:</label>
      <input 
      className='w-[60%] h-7 rounded  border-2 border-black px-2' 
      type="number" 
      placeholder='Enter your Amount' 
      value={amount}
      onChange={(e)=> setAmount(e.target.value)}        
        />

      <label className="font-bold">Enter the Description:</label>
      <input 
      className='w-[60%] h-10 rounded border-2 border-black px-2' 
      type="text" 
      placeholder='Enter the description' 
      value={description}
      onChange={(e)=> setDescription(e.target.value)}
      />
      <label className="font-bold">Enter the Amount:</label>
      <select 
      className='w-[60%] h-7 rounded border-2 border-black px-2'
      value={category}
      onChange={(e)=> setCategory(e.target.value)}
      >
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>
      <button
       onClick={handleSubmit}
       className='w-40 h-8 mt-5 bg-sky-400 rounded text-white hover:bg-sky-500 transition'>Add Expense</button>
    </div>
  )
}

export default ExpenseForm
