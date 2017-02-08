import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../store';
import {addRivers} from '../actions/RiverActions';
import RiverList from "../layouts/RiverList"

class RiverListContainer extends Component {

componentDidMount(){
  var _this = this;
  axios.get('/api/rivers').then(function(response) {
      store.dispatch(addRivers(response.data));
  });
}

  render() {
    return (
      <RiverList rivers={this.props.rivers} />
    );
  }


}

const mapStateToProps = function(store){
  return {
    rivers: store.riverState.rivers
  };
}

export default connect(mapStateToProps)(RiverListContainer);
