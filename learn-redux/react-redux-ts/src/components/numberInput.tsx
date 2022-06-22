import * as React from "react";

interface Props {
  name: string;
  value: number;
}

interface ClassState {
  value: number;
}

const inputStyle = {
  marginTop: "10px",
  display: "inline-flex",
};
const divStyle = {
  width: "150px",
};

export class NumberInput extends React.Component<Props, ClassState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  onNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: Number(event.target.value),
    });
  }

  render() {
    return (
      <div style={inputStyle}>
        <div style={divStyle}>{this.props.name}</div>
        <input
          name={this.props.name}
          className="input"
          type="number"
          onChange={this.onNumberChange}
        />
      </div>
    );
  }
}

export default NumberInput;
