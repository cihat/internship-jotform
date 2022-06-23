import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

const CounterActions = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment (+)</button>
      <button onClick={() => dispatch(decrement())}>Decrement (-)</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        Increment by amount (+)
      </button>
    </div>
  );
};

export default CounterActions;
