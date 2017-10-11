import React, { Component } from 'react';

class HexagonButton extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 0 };
  }

  Toggle(){
    var colorIndex = (this.state.color === 7) ? 0 : this.state.color + 1;
  	this.setState({ color: colorIndex });
  }

  render() {
    var color = 'color-' + this.state.color;

  	return (<div ref={"button"}
				 className={`hexagon ${color}`}
				 onClick={this.Toggle.bind(this)}>
  		    </div>);
  }
}

export default HexagonButton; 