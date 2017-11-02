import React from 'react';

class Circle extends React.Component {
  render() {
    const canvas = document.getElementById(this.props.id);
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(this.props.x, this.props.y, this.props.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.props.color;
      ctx.fill();
    }
    
    return('');
  }
}

export default Circle;