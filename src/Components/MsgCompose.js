import React, { Component } from 'react';

export default class MsgCompose extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState( {message: e.target.value}, )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState( {message:''} )
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