import React, {useState} from 'react';
import {ExpenseItem} from "./ExpenseItem";
import './Expenses.css'
import {Card} from "../UI/Card";
import {ExpenseFilter} from "./ExpenseFilter";

export const Expenses = ({expenses},props) => {

    return (
            <Card className={'expenses'}>
                <ExpenseFilter dropdownChangeHandler={props.dropdownChangeHandler} selected={props.selected}/>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
            </Card>
    );
};
