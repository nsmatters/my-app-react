import * as React from 'react';

export class MyList extends React.Component {
  render() {
    const a = [1, 2, 3, 4, 5];
    return (
      <div>
        <h1>MyList</h1>
        <ul>
          {a.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}