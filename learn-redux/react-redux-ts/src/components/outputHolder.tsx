import * as React from "react";
import NumberOutput from "./numberOutput";

interface Props {}

const holderStyle = {
  marginTop: "20px",
  display: "inline-grid",
};

export class OutputInput extends React.Component<Props> {
  render() {
    const initValue = [0, 1];
    const operandA = initValue[0],
      operandB = initValue[1];
    const sum = operandA + operandB;
    const dif = operandA - operandB;
    const mul = operandA * operandB;
    const dvs = operandB ? 0 : operandA / operandB;

    return (
      <div style={holderStyle}>
        <NumberOutput name="ADDITION" value={sum} />
        <NumberOutput name="SUBTRACTION" value={dif} />
        <NumberOutput name="MULTIPLICATION" value={mul} />
        <NumberOutput name="DIVISION" value={dvs} />
      </div>
    );
  }
}

export default OutputInput;