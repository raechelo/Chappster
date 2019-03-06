import React, { Component } from 'react';

const Msg = (props) => {
    return (
      <div className="msg">
        <div className="message-sender">{props.username}</div>
        <div className="message-text">{props.text}</div>
      </div>
    )
  }

export default Msg;