import React, { Component } from 'react';

export default class RoomList extends Component {
  render() {
    console.log('room:', this.props.rooms)
    return (
      <div className="room-list">
        <ul>
          <h4 className="room-list-hd">Your Rooms</h4>
          {this.props.rooms.map(room => {
            return (
              <li>
                <a href="#"># {room.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}