import React, { Component } from 'react';
import River from '../components/River';
import NewRiver from '../components/NewRiver';

class RiverList extends Component {

  render() {
    return (
      <div >
      <h4> All Rivers </h4>
      <NewRiver />
      {this.props.rivers.map(this.createItemList)}
      </div>
    );
  }

  createItemList(river, index){
    return (
      <div key={index} className="four columns">
        <River name={river.name} description={river.description} section={river.section} path={river.path}/>
      </div>
    );
  }

}


export default RiverList;
