import React, { Component } from 'react';
import HexagonButton from './HexagonButton';

class Schedule extends Component {
  render() {
  	let buttons = [];

  	for (var i = 0; i < this.props.sessionCount * 7; i++){
  		buttons.push(<HexagonButton colour='#000'/>)
  	}

  	return (<div className="schedule">
  				<div className="week">
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>Th</p>
            <p>F</p>
            <p>Sa</p>
            <p>Su</p>
          </div>
          <div className="buttons">
  					{buttons}
  				</div>
			</div>);
  }
}

export default Schedule; 