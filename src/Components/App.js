import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client'
import MessageContainer from './MsgContainer'
import RoomList from './RoomList';
import MessageCompose from './MsgCompose';
import RoomCreate from './RoomCreate';
import { tokenUrl, instanceLocator } from '../config'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Buzz',
      tokenProvider: new Chatkit.TokenProvider({
        url:tokenUrl
      })
    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: '19386063',
        hooks: {
          onMessage: message => {
            this.setState( {messages: [...this.state.messages, message]} )
          }
        }
      })
    })
    .catch(err => {
      console.log(`Error subscribing room ${err}`)
    })
  }

  render() {
    return (
      <div className="App">
          <RoomList />
          <MessageContainer messages={this.state.messages}/>
          {/* <RoomCreate /> */}
          <MessageCompose />
      </div>
    );
  }
}

