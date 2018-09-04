import * as React from 'react';
import { TemperatureInputV2 } from './TemperatureInputV2'
import BoilingVerdict from './BoilingVerdict'
import { toCelsius, toFahrenheit, tryConvert } from './temperature'

interface TemperatureV2State {
  value: string;
}

export class TemperatureV2 extends React.Component<object, TemperatureV2State> {

  constructor(props: object) {
    super(props);
    this.state = { value: '' };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleFahrenheitChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: tryConvert(e.target.value, toCelsius) });
  }

  render() {
    return (
      <div>
        <TemperatureInputV2 scale="c" value={this.state.value} onchange={this.handleCelsiusChange} />
        <TemperatureInputV2 scale="f" value={tryConvert(this.state.value, toFahrenheit)} onchange={this.handleFahrenheitChange} />
        <BoilingVerdict temperature={parseFloat(this.state.value)} />
      </div>
    );
  }
}