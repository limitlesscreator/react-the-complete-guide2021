import React, {useState} from 'react';
import {ExpenseItem} from "./ExpenseItem";
import './Expenses.css'
import {Card} from "../UI/Card";
import {ExpenseFilter} from "./ExpenseFilter";
import {ExpensesList} from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";

export const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses  = props.items.filter(el => el.date.getFullYear().toString() === filteredYear)



    return (
        <Card className={'expenses'}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
};
