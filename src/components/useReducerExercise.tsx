import { error } from "console";
import React, { useReducer, useState } from "react";

const Counter = () => {
  const initialState = { count: 0, countStep: 1 };
  const countReducer = (state: any, action: any) => {
    if (action.type === "INCREASE") {
      return { ...state, count: state.count + state.countStep };
    }
    
    if (action.type === "DECREASE") {
      return { ...state, count: state.count - state.countStep };
    }
    if (action.type === "RESET") {
      return { countStep: 1, count: 0 };
    }
    if (action.type === "SET_STEP") {
      return { ...state, countStep: action.payload };
    } else {
      throw new Error("invalid action type");
    }
  };


  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const handleIncrementChange = (event: any) => {
    dispatch({ type: "SET_STEP", payload: parseInt(event.target.value) });
  };
  return (
    <div>
      <h2>My Counter App</h2>
      <h3>{state.count}</h3>
      <input
        type='number'
        value={state.countStep}
        onChange={handleIncrementChange}
      />
      <button onClick={handleIncrease}> increase +</button>
      <button onClick={handleDecrease}> decrease -</button>
      <button onClick={handleReset}> Reset </button>
    </div>
  );
};
export default Counter;






