import React, { Component } from 'react';
import Schedule from './Schedule';
import Legends from './Legends';

class Frame extends Component {
  render() {
  	return (<div className="instagram-frame">
  				<div className="content">
	            	<Schedule startFromSunday={false} sessionCount={3} data={this.props.data}/>
	            	<Legends />
	            </div>
			</div>);
  }
}

export default Frame;