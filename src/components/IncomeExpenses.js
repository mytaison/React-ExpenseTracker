import React , {useContext} from 'react'
import {GlobalContext} from '../contexts/GlobalState'
export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const expense = amounts.filter(item => item < 0).reduce( (acc,item) =>(acc += item), 0 ) * (-1)
    const income = amounts.filter(item => item > 0).reduce( (acc,item) =>(acc += item), 0 )
    //alternate
    // const income = transactions.reduce( (amnt , item) => ((item.amount > 0)? (amnt += item.amount) : (amnt += 0)), 0 ).toFixed(2)
    // const expense = transactions.reduce( (amnt , item) => ((item.amount < 0)? (amnt += item.amount) : (amnt += 0)), 0 ).toFixed(2)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus" >+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus" >-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
