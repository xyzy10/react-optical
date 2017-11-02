import React, { Component } from 'react';
import OpticalApp from './Components/OpticalApp/OpticalApp';
import logo from './logo.svg';
import './App.css';
import ControlForm from './Components/ControlForm/ControlForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNumCircleChange = this.handleNumCircleChange.bind(this);
    this.handleRenderIntervalChange = this.handleRenderIntervalChange.bind(this);
    this.handleCircleColorChange = this.handleCircleColorChange.bind(this);

    this.state = {
      numberCircle: 24,
      renderInterval: 200,
      circleColor: 'red'
    };
  }

  handleNumCircleChange(numberCircle) {
    this.setState({
      numberCircle: numberCircle
    });
  }
  
  handleRenderIntervalChange(renderInterval) {
    this.setState({
      renderInterval: renderInterval
    });
  }

  handleCircleColorChange(circleColor) {
    this.setState({
      circleColor: circleColor
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
    const circleColor = this.state.circleColor;
    const myCanvasID = "myCanvas";

    // Reset the canvas.
    const canvas = document.getElementById(myCanvasID);
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Very important, we need to generated key dynamically to reset the OpticalApp component.
    let key = numberCircle + '-' + renderInterval;

    return (
      <div id="AppContainer" >
        <div class="form">
          <h3 id="message">Staring at the center of the screen. What color is blinking?</h3>
          <ControlForm
            numberCircle={numberCircle}
            circleColor={circleColor}
            renderInterval={renderInterval}
            onNumCircleChange={this.handleNumCircleChange}
            onRenderIntervalChange={this.handleRenderIntervalChange}
            onCircleColorChange={this.handleCircleColorChange}
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
          circleColor={circleColor}
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
