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
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this);
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
      this.currentUser = currentUser

      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms:', err))

      this.currentUser.subscribeToRoom({
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

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      // same as text: text,
      roomId: '19386063'
    });
  }

  render() {
    return (
      <div className="App">
          <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
          <MessageContainer messages={this.state.messages}/>
          {/* <RoomCreate /> */}
          <MessageCompose sendMessage={this.sendMessage} />
      </div>
    );
  }
}

