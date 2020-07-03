import React , {useState, useContext} from 'react'
import {GlobalContext} from '../contexts/GlobalState';
export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    const submitTransaction = e => {
        e.preventDefault();
        const newTransaction = {
            id: transactions.length + 1,
            text: text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction); 
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="addTransForm" onSubmit = {submitTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>(negative - expense , positive - income)</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount"></input>
                </div>
                <div>
                    <button className="btn" type="submit" form="addTransForm">Add Transaction</button>
                </div>
            </form>
        </>
    )
}
