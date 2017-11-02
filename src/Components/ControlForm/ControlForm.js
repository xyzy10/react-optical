import React from 'react';

class ControlForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNumberCircleChange = this.handleNumberCircleChange.bind(this);
    this.handleRenderIntervalChange = this.handleRenderIntervalChange.bind(this);
  }

  handleNumberCircleChange(event) {
    if (event.target.value < 3000 && event.target.value > 0) {
      this.props.onNumCircleChange(event.target.value);
    }
  }

  handleRenderIntervalChange(event) {
    if (event.target.value > 0) {
      this.props.onRenderIntervalChange(event.target.value);
    }
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
      </form>
    );
  }
}

export default ControlForm;