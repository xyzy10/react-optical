import React from 'react';

class Canvas extends React.Component {
  render() {
    let canvasWidth, canvasHeight = 0;
    let canvasStyle = null;

    if (Number.isInteger(this.props.canvasWidth)) {
      canvasWidth = this.props.canvasWidth;
    }else {
      canvasWidth = window.innerWidth;
    }

    if (Number.isInteger(this.props.canvasHeight)) {
      canvasHeight = this.props.canvasHeight;
    }else {
      canvasHeight = window.innerHeight;
    }
    
    if (canvasHeight > canvasWidth) {
      canvasWidth = window.innerWidth;
    }

    if (this.props.canvasStyle !== null) {
      canvasStyle = this.props.canvasStyle;
    }
    
    return(
      <canvas 
        id={this.props.myCanvasID}
        width={canvasWidth}
        height={canvasHeight} 
        style={canvasStyle}
      />
    );
  }
}

export default Canvas;