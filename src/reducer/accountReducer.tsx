import { AccountAction, AccountState } from "../types"

export const accountReducer = (state: AccountState, action: AccountAction): AccountState => {
    switch (action.type) {
      case 'DEPOSIT':
        return { balance: state.balance + action.amount }
      case 'WITHDRAW':
        return { balance: state.balance - action.amount }
      case 'RESET':
        return { balance: 0 }
      default:
        return state
    }
  }