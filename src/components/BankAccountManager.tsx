import { useReducer, useState } from "react";
import { accountReducer } from "../reducer/accountReducer";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState =  { balance: 0 };

const BankAccountManager = () => {
    const [state, dispatch] = useReducer(accountReducer, initialState)
    const [amount, setAmount] = useState('')
  
    const handleDeposit = () => {
      const depositAmount = parseFloat(amount)
      if (!isNaN(depositAmount) && depositAmount > 0) {
        dispatch({ type: 'DEPOSIT', amount: depositAmount })
        setAmount('')
      }
    }
  
    const handleWithdraw = () => {
      const withdrawAmount = parseFloat(amount)
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= state.balance) {
        dispatch({ type: 'WITHDRAW', amount: withdrawAmount })
        setAmount('')
      }
    }
  
    const handleReset = () => {
      dispatch({ type: 'RESET' })
      setAmount('')
    }
  
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title h3 fw-bold mb-4">Bank Account Manager</h1>
            <p className="card-text mb-4">
              Current Balance: <strong>${state.balance.toFixed(2)}</strong>
            </p>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount:</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
            <div className="d-flex gap-2 mb-3">
              <button 
              onClick={handleDeposit}
              className="btn btn-success"
              >
                Deposit
              </button>
              <button 
                className="btn btn-danger"
                onClick={handleWithdraw} 
                disabled={parseFloat(amount) > state.balance}
              >
                Withdraw
              </button>
            </div>
            <button 
            className="btn btn-warning"
            onClick={handleReset}>
              Reset Balance
            </button>
          </div>
        </div>
      </div>
    )
  }

export default BankAccountManager;