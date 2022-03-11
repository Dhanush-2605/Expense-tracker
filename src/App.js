// import ExpenseItem  from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import { useState } from 'react';

function App() {
  const [expense,updateExpense]=useState([]);
  console.log(NewExpense);
  // function addItems(){
         
  // }
  //   {
  //   id:"e1",
  //   title:"toiler paper",
  //   amount:32,
  //   date:new Date()
  // },
  // {
  //   id:"e2",
  //   title:"paper",
  //   amount:22,
  //   date:new Date()
  // }


  return (
    <div className="App">
    <NewExpense />

    <Expenses items={expense} />

    </div>
  );
}

export default App;
