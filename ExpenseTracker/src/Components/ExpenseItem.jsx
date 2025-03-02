import React from 'react';

const ExpenseItem = ({ expense }) => {
  if (!expense || !expense.category) {
    return <p className="text-red-500">Invalid expense data</p>;
  }

  return (
    <div className='w-[60%] flex justify-between items-center bg-white shadow-md p-4 rounded-md border border-gray-300 mb-2'>
      
      {/* {Left Section: Amount & Description} */}
      <div>
        <p className='text-lg font-bold text-gray-800'>💰 ${expense.amount}</p>
        <p className='text-sm text-gray-600 '>{expense.description}</p>
      </div>

      {/* {Right Section: Category} */}
      <p className='text-sm font-semibold text-blue-500'>
        {expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}

      </p>
    </div>
  );
};

export default ExpenseItem;

