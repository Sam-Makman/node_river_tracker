import React, { Component } from 'react';
import river from './River.css';

class River extends Component {
  render() {
    return (
      <div >
        <div >
          <h2 className={river.title}>{this.props.name}</h2>
          <h6>{this.props.section}</h6>
        </div>
          <p>{this.props.description}</p>
          <img src={this.props.path} role="presentation"/>
      </div>
    );
  }
}

export default River;
