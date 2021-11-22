import React from 'react';
import  './ExpensesList.css'
import {ExpenseItem} from "./ExpenseItem";
export const ExpensesList = (props) => {

    if (props.filteredExpenses.length === 0){
        return <h2 className={'expenses-list__fallback'}>Found no expenses.</h2>
    }

    return (
        <ul className={'expenses-list'}>
            {props.filteredExpenses.map(el => {
                return (
                    <ExpenseItem
                        key={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}/>
                )
            })}
        </ul>
    )

};