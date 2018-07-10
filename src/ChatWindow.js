import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import AddMessage from './AddMessage';
import './App.css';

class ChatWindow extends Component {
  
  
 updateMsgs = message => {
    this.props.updateMsgs(message)
  };

   render(){
     const { user } = this.props;
     const { messages } = this.props;


     return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
          <MessageList user={user} messages={messages} />
          <AddMessage  user={user} messages={messages} updateMsgs={this.updateMsgs}/>
       </div>
    );
  }
}

ChatWindow.propTypes = {
  user:       PropTypes.object.isRequired,
  messages:   PropTypes.array.isRequired,
  updateMsgs: PropTypes.func.isRequired,
};

export default ChatWindow;