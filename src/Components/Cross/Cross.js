import React from 'react';

class Cross extends React.Component {
  render() {
    const canvas = document.getElementById(this.props.myCanvasID);
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      const len = this.props.len;
      const x = this.props.x;
      const y = this.props.y;

      ctx.beginPath();
      ctx.moveTo(x - len / 2, y);
      ctx.lineTo(x + len / 2, y);
      ctx.moveTo(x, y - len / 2);
      ctx.lineTo(x, y + len / 2);
      ctx.stroke();
    }
    
    return('');
  }
}

export default Cross;