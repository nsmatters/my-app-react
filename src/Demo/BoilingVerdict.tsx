import * as React from 'react';

interface BoilingVerdictProps {
  temperature: number;
}

export default class BoilingVerdict extends React.Component<BoilingVerdictProps, object> {
  render() {
    if (this.props.temperature >= 100) {
      return (
        <p>水烧开了</p>
      );
    }
    return (
      <p>水没烧开</p>
    );
  }
}