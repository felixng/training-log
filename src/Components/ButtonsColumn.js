import React, { Component } from 'react';
import HexagonButton from './HexagonButton';

class ButtonsColumn extends Component {
  render() {
    const buttons = [];

  	for (var i = 0; i < this.props.buttonCount; i++){
  		buttons.push(<HexagonButton key={`hex-${i}`} colour='#000'/>)
  	}

  	return (<div className="column">
                <div className="column-header">
                    <p>{this.props.header}</p>
                </div>
                <div className="buttons">
                    {buttons}
                </div>
            </div>);
  }
}

export default ButtonsColumn; 