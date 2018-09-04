import * as React from 'react';

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit"
}

interface TemperatureInputProps {
  scale: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TemperatureInputState {
  value: string;
}

export class TemperatureInputV2 extends React.Component<TemperatureInputProps, TemperatureInputState> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[this.props.scale]}</legend>
        <input type="text" value={this.props.value} onChange={this.props.onchange} />
      </fieldset>
    );
  }
}