import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  if (!expenses || expenses.length === 0) {
    return <p className="text-gray-500">No expenses added yet.</p>;
  }

  return (
    <div className="w-full flex flex-col items-center mt-4">
      <h2 className="text-xl font-bold">Your Expenses</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
