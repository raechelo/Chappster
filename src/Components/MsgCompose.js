import React, { Component } from 'react';

export default class MsgCompose extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit - this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState( {message: e.target.value}, )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message);
    
  }
  
  render() {
    return (
      <form 
          onSubmit={this.handleSubmit}
          className="compose-msg">
      <input 
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="type your message and hit enter"
          type="text" />
      </form>
    )
  }
}