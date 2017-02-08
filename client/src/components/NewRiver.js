import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import {addRiver} from '../actions/RiverActions';

class NewRiver extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: ''
    };

    this._handleImageChange = this._handleImageChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <form  >
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" ref="name" type="text" />
          </div>
          <div>
            <label htmlFor="section">Section</label>
            <input name="section" ref="section" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description </label>
            <input name="description" ref="description" type="text" />
          </div>
          <div>
            <input type="file" name="file" ref="file" onChange={this._handleImageChange}/>
          </div>
        </form>

        <button onClick={this.submitForm.bind(this)} > Submit </button >
      </div>
    );
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file
      });
    }

    reader.readAsDataURL(file)
  }

  submitForm(e){
    console.log(this.state.file);
    var data = new FormData();
    data.append("name", this.refs.name.value);
    data.append("section", this.refs.section.value);
    data.append("description", this.refs.description.value);
    data.append("file", this.state.file);

    var newRiver = {
      name : this.refs.name.value,
      section : this.refs.section.value,
      description : this.refs.description.value
    }

    axios.post('/api/rivers', data)
    .then(function(res){
      store.dispatch(addRiver(newRiver));
    });

    this.refs.name.value = "";
    this.refs.section.value = "";
    this.refs.description.value = "";

  }
}

export default NewRiver;
