import React, { Component } from 'react';
import ButtonsColumn from './ButtonsColumn';



class Schedule extends Component {
  render() {
    let columns = [];
    var headers = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    if (this.props.startFromSunday){
      headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }

    for (var i = 0; i < headers.length; i ++){
      columns.push(<ButtonsColumn header={headers[i]} buttonCount={this.props.sessionCount} />)
    }

  	return (<div className="schedule">
              {columns}
      			</div>);
  }
}

export default Schedule; 