import React, { Component } from 'react';
import ButtonsColumn from './ButtonsColumn';



class Schedule extends Component {
  getColumns(){
    let columns = [];
    var headers = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    if (this.props.startFromSunday){
      headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }

    for (var i = 0; i < headers.length; i ++){
      columns.push(<ButtonsColumn header={headers[i]} buttonCount={this.props.sessionCount} />)
    }

    return columns;
  }

  render() {
  	return (<div className="schedule">
              {this.getColumns()}
      			</div>);
  }
}

export default Schedule; 