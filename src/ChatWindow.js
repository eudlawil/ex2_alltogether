import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  state = {
    message: {
      username: this.props.user.username,
      text: ''
    }
  };
  
  isDisabled = () => {
    if (this.state.message.text === "") {
      return true;
    }
    return false;
  };

  handleInputChange = event =>{
    const { value } = event.target;
    this.setState( currState =>({
      message: { 
        username:  this.props.user.username,
        text: value }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateMsgs(this.state.message);
  };


   render(){
     const { user } = this.props;
     const { messages } = this.props;
     const { username, text } = this.state.message;

     return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group"  onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" value={text} user={username} placeholder="Enter your message..." onChange={this.handleInputChange} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
      
      
      
    );
  }
}

ChatWindow.propTypes = {
  user:     PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;