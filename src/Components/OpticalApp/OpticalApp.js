import React from 'react';
import Circle from '../Circle/Circle';
import Cross from '../Cross/Cross';

class OpticalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blinkIndex: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.update(),
      this.props.renderInterval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.renderInterval !== this.props.renderInterval) {
      clearInterval(this.timerID);

      this.timerID = setInterval(
        () => this.update(),
        newProps.renderInterval
      );
    }
  }

  update() {
    // To make animation smooth, we are going to reset the blinkIndex before the render the last circle.
    let blinkIndex = (this.state.blinkIndex === this.props.numberCircle - 1) ?  0 : this.state.blinkIndex + 1;

    this.setState({
      blinkIndex: blinkIndex
    });
  }

  render() {
    const circles = [];
    const canvasWidth = this.props.canvasWidth;
    const canvasHeight = this.props.canvasHeight;

    let r = 0;
    let circleradius = 0;
    
    // The radius of the middle circle
    if (canvasHeight > canvasWidth) {
      r = canvasWidth / 2.8;
      circleradius = canvasWidth / 45;
    } else {
      r = canvasHeight / 2.8;
      circleradius = canvasHeight / 45;
    }
    
    // The location of the center point of the middle circle
    const cx = canvasWidth / 2;
    const cy = canvasHeight / 2;

    const numberCircle = this.props.numberCircle;

    // The angle of each point, 360 degree / 12 points = 30 degree per point
    const a = 360 / numberCircle;

    for (let i = 0; i < numberCircle; i++) {
      let x = 0;
      let y = 0;
      // Since cos() or sin() expect radian as input, we need to convert them to degree.
      let degree = a * i * (Math.PI / 180.0);

      // The parametric equation for a circle. x and y are the location of a point.
      x = cx + r * Math.cos(degree);
      y = cy + r * Math.sin(degree);

      // Round the result to 1 digit
      x = Math.round(x * 10) / 10;
      y = Math.round(y * 10) / 10;

      let blink = false;
      let color = this.props.circleColor;
      let radius = circleradius;
      if (this.state.blinkIndex === i) {
        blink = true;
        color = this.props.canvasColor;
        radius  = circleradius + 1;
      }
      
      circles.push(
        <Circle
          id={this.props.myCanvasID} 
          color={color} 
          x={x} 
          y={y}
          radius={radius}
          key={i} />
      );
    }
    
    return (
      <div>
        {circles}
        <Cross 
          myCanvasID={this.props.myCanvasID} 
          x={cx} 
          y={cy} 
          len={canvasHeight / 20} />
      </div>
    );
  }
}

export default OpticalApp;