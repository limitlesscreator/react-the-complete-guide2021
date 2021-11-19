import {ExpenseItem} from "./components/Expenses/ExpenseItem";
import {Expenses} from "./components/Expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    let [selected,setSelected] = useState(2020)


    const expenses = [
        {
            id: 'el1',
            title: 'Car Insurance',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 'el2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2020, 2, 12),
        },
    ]

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        console.log(selected)

    }


    const dropdownChangeHandler = (event) => {
        setSelected(event.currentTarget.value)
        console.log('It\'s work!')
    };

    return (
        <div className="App">
            <NewExpense saveExpenseDataHandler={saveExpenseDataHandler}/>
            <div>
                <Expenses expenses={expenses} selected={selected} dropdownChangeHandler={dropdownChangeHandler}/>
            </div>
        </div>
    );
}

export default App;
