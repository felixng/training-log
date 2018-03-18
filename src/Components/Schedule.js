import React, { Component } from 'react';
import ButtonsColumn from './ButtonsColumn';

class Schedule extends Component {
  getColumns(data){
    const columns = [];
    // var headers = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    // if (this.props.startFromSunday){
    //   headers = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    // }

    console.log(data);

    Object.keys(data).map((key) => {
      columns.push(<ButtonsColumn key={`header-${key}`} header={key[0]} data={data[key]} />)
    });

    return columns;
  }

  render() {
  	return (<div className="schedule">
              {this.getColumns(this.props.data)}
      			</div>);
  }
}

export default Schedule; 
