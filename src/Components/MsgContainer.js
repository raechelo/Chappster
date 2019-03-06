import React, { Component } from 'react';
import Msg from './Msg'

export default class MessageContainer extends Component {
  render() {
    return (
      <div className="msg-container">
        {this.props.messages.map((msg, index) => {
          return (
           <Msg key={index} username={msg.senderId} text={msg.text} />
          )
        })}
      </div>
    )
  }
}