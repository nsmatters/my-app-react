import * as React from 'react';
import './App.css';
import MyLabel from './Demo/MyLabel'
import Clock from './Demo/Clock'
import TemperatureV1 from './Demo/TemperatureV1'
import { TemperatureV2 } from './Demo/TemperatureV2'
import { MyList } from './Demo/MyList';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyLabel />
        <Clock title="Hello world" />
        <TemperatureV1 />
        <TemperatureV2 />
        <MyList />
      </div>
    );
  }
}

export default App;
