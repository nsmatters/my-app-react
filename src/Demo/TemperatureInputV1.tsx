import * as React from 'react';

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit"
}

interface TemperatureInputProps {
  scale: string;
}

interface TemperatureInputState {
  value: string;
}

export class TemperatureInputV1 extends React.Component<TemperatureInputProps, TemperatureInputState> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[this.props.scale]}</legend>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </fieldset>
    );
  }
}