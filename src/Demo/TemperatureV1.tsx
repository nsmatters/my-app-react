import * as React from 'react';
import BoilingVerdict from './BoilingVerdict';

interface TemperatureV1State {
  temperature: string;
}

export default class TemperatureV1 extends React.Component<object, TemperatureV1State> {

  constructor(props: object) {
    super(props);
    this.state = { temperature: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    return (
      <fieldset>
        <legend>请输入温度：</legend>
        <input type="text" onChange={this.handleInputChange} />
        <BoilingVerdict temperature={parseFloat(this.state.temperature)} />
      </fieldset>
    );
  }
}