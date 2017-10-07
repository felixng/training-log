import React, { Component } from 'react';

class HexagonButton extends Component {
  _colourToggle(){
  	console.log('colour change');
  }

  render() {
  	return (<div className="hexagon" onClick={this._colourToggle()}>
  		    </div>);
  }
}

export default HexagonButton; 