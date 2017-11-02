import React, { Component } from 'react';
import OpticalApp from './Components/OpticalApp/OpticalApp';
import logo from './logo.svg';
import './App.css';
import ControlForm from './Components/ControlForm/ControlForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnNumCircleChange = this.handleOnNumCircleChange.bind(this);
    this.handleRenderIntervalChange = this.handleRenderIntervalChange.bind(this);

    this.state = {
      numberCircle: 12,
      renderInterval: 1000
    };
  }

  handleOnNumCircleChange(numberCircle) {
    this.setState({
      numberCircle: numberCircle
    });
  }
  
  handleRenderIntervalChange(renderInterval) {
    this.setState({
      renderInterval: renderInterval
    });
  }

  render() {
    let canvasHeight = window.innerHeight;
    let canvasWidth = window.innerWidth;

    if (canvasHeight > canvasWidth) {
      canvasWidth = window.innerWidth;
    }

    const numberCircle = this.state.numberCircle;
    const renderInterval = this.state.renderInterval;
    const myCanvasID = "myCanvas";

    // Reset the canvas.
    const canvas = document.getElementById(myCanvasID);
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    let key = numberCircle + '-' + renderInterval;

    return (
      <div id="AppContainer" >
        <div class="form">
          <h3 id="message">Staring at the center of the screen. What color is the blinker?</h3>
          <ControlForm
            numberCircle={numberCircle}
            renderInterval={renderInterval}
            onNumCircleChange={this.handleOnNumCircleChange}
            onRenderIntervalChange={this.handleRenderIntervalChange}
          />
        </div>
        <canvas id={myCanvasID} 
          width={canvasWidth} 
          height={canvasHeight} 
          style={{border: "1px solid #000", backgroundColor: "grey" }}>
        </canvas>
        <OpticalApp
          key={key}
          myCanvasID={myCanvasID}
          numberCircle={numberCircle}
          circleColor={"magenta"}
          canvasWidth={canvasWidth} 
          canvasHeight={canvasHeight}
          canvasColor={"grey"}
          renderInterval={renderInterval}
        />
      </div>
    );
  }
}

export default App;
