import * as React from 'react';

export class MyForm extends React.Component {
  input: HTMLInputElement;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert('A name was submitted: ' + this.input.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => {
            if (input) {
              this.input = input
            }
          }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}