import React, { Component } from 'react';
import OpticalApp from './Components/OpticalApp/OpticalApp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let canvasHeight = window.innerHeight;
    let canvasWidth = window.innerWidth;

    if (canvasHeight > canvasWidth) {
      canvasWidth = window.innerWidth;
    }

    return (
      <div id="AppContainer">
        <OpticalApp 
          numberCircle={12}
          circleColor={"magenta"}
          canvasWidth={canvasWidth} 
          canvasHeight={canvasHeight}
          canvasColor={"grey"}
          renderTime={1000}
        />
      </div>
    );
  }
}

export default App;
