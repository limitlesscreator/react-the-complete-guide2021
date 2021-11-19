import React from 'react';
import './NewExpense.css'
import {ExpenseForm} from "./ExpenseForm";


export const NewExpense = (props) => {
    return (
        <div className={'new-expense'}>
            <ExpenseForm onSaveExpenseData={props.saveExpenseDataHandler}/>
        </div>
    );
};
