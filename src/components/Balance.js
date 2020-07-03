import React , {useContext} from 'react'
import {GlobalContext} from '../contexts/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce( (accn , item) => (accn += item), 0 ).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>  
    </>
  )
}
