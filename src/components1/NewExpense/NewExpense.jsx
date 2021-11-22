import React, {useState} from 'react';
import './NewExpense.css'
import {ExpenseForm} from "./ExpenseForm";


export const NewExpense = (props) => {
    const [isEdding, setIsEdding] = useState(false)

    const startEditingHandler = () => {
        setIsEdding(true)
    }
    const stopEditingHandler = () => {
        setIsEdding(false)
    }
    return (
        <div className={'new-expense'}>
            {!isEdding && <button onClick={startEditingHandler}>Add New Expense </button>}
            {isEdding && <ExpenseForm onSaveExpenseData={props.saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
};
