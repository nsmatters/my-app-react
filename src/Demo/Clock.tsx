import * as React from 'react';

interface ClockProps {
  title: string;
}

interface ClockState {
  date: Date;
}

export default class Clock extends React.Component<ClockProps, ClockState> {

  timer: NodeJS.Timer;
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );

  }
}