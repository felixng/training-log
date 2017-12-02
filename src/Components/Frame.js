import React, { Component } from 'react';
import Schedule from './Schedule';
import Legends from './Legends';

class Frame extends Component {
  render() {
  	return (<div className="instagram-frame">
  				<div className="content">
	            	<Schedule startFromSunday={false} sessionCount={3} />
	            	<Legends />
	            </div>
			</div>);
  }
}

export default Frame;