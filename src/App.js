import React, { Component } from 'react';
import OpticalApp from './Components/OpticalApp/OpticalApp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Optioal Illusions</h1>
        </header>
        <p className="App-intro">
         <OpticalApp 
          numberCircle={12}
          circleColor={"magenta"}
          canvasWidth={600} 
          canvasColor={"grey"}
          renderTime={300}
         />
        </p>
      </div>
    );
  }
}

export default App;
