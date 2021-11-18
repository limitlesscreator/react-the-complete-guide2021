import {ExpenseItem} from "./components/Expenses/ExpenseItem";
import {Expenses} from "./components/Expenses/Expenses";

function App() {
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
    return (
        <div className="App">
            <h2>Let's get started!</h2>
            <div>
                <Expenses expenses={expenses}/>
            </div>
        </div>
    );
}

export default App;
