import React, { Component } from 'react';
import Schedule from './Schedule';
import Header from './Header';
import Legends from './Legends';
import StatsBar from './StatsBar';

class Frame extends Component {
  render() {
  	return (<div className="instagram-frame">
  				<div className="content">
	  				<Header />
	            	<Schedule sessionCount={3} />
	            	<Legends />
	            	<StatsBar />
	            </div>
			</div>);
  }
}

export default Frame;