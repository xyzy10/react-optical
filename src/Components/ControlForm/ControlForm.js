import React from 'react';

class ControlForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumberCircleChange = this.handleNumberCircleChange.bind(this);
    this.handleRenderIntervalChange = this.handleRenderIntervalChange.bind(this);
    this.handleCircleColorChange = this.handleCircleColorChange.bind(this);
  }

  handleNumberCircleChange(event) {
    if (event.target.value < 1000 && event.target.value > 0) {
      this.props.onNumCircleChange(event.target.value);
    }
  }

  handleRenderIntervalChange(event) {
    if (event.target.value > 0) {
      this.props.onRenderIntervalChange(event.target.value);
    }
  }

  handleCircleColorChange(event) {
      this.props.onCircleColorChange(event.target.value);
  }

  render() {
    return (
      <form>
        <label>
          Number of Dots:
          <input type="number" value={this.props.numberCircle} onChange={this.handleNumberCircleChange} />
        </label>
        <label>
          Speed (in milliseconds):
          <input type="number" value={this.props.renderInterval} onChange={this.handleRenderIntervalChange} />
        </label>
        <label>
          Color:
          <select value={this.props.circleColor} onChange={this.handleCircleColorChange}>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="magenta">mangenta</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ControlForm;