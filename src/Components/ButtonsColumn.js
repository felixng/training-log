import React, { Component } from 'react';
import HexagonButton from './HexagonButton';

class ButtonsColumn extends Component {
  render() {
    const buttons = [];
    var buttonData = this.props.data;

    buttonData.sessions.map((value, index) => {
      buttons.push(<HexagonButton key={`hex-${index}`} colourIndex={value} />);
    });

    return (
      <div className="column">
        <div className="column-header">
          <p>{this.props.header}</p>
        </div>
        <div className="buttons">{buttons}</div>
      </div>
    );
  }
}

export default ButtonsColumn;
