import React, { Component } from 'react';
import ButtonsColumn from './ButtonsColumn';



class Schedule extends Component {
  getColumns(){
    const columns = [];
    var headers = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    if (this.props.startFromSunday){
      headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    
    headers.forEach((header, index) => {
      columns.push(<ButtonsColumn key={`header-${index}`} header={header} buttonCount={this.props.sessionCount} />)
    });

    return columns;
  }

  render() {
  	return (<div className="schedule">
              {this.getColumns()}
      			</div>);
  }
}

export default Schedule; 