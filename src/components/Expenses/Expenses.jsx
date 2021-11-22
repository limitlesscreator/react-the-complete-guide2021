import React, {useState} from 'react';
import {ExpenseItem} from "./ExpenseItem";
import './Expenses.css'
import {Card} from "../UI/Card";
import {ExpenseFilter} from "./ExpenseFilter";
import {ExpensesList} from "./ExpensesList";

export const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses  = props.items.filter(el => el.date.getFullYear().toString() === filteredYear)



    return (
        <Card className={'expenses'}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
};
