import { useSelector } from "react-redux";
import React from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h4>{count}</h4>
    </div>
  );
};

export default Counter;
