import React, {useState} from 'react';
import {ExpenseItem} from "./ExpenseItem";
import './Expenses.css'
import {Card} from "../UI/Card";
import {ExpenseFilter} from "./ExpenseFilter";

export const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
        console.log(selectedYear)
    }
    return (
            <Card className={'expenses'}>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map(el => {
                    return (
                        <ExpenseItem title={el.title} amount={el.amount} date={el.date}/>
                    )
                })}
            </Card>
    );
};
