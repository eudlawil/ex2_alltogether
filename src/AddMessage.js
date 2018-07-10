import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddMessage extends Component {
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
       const { username, text } = this.state.message;
       return(
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
       );
     }     
}

AddMessage.propTypes = {
  user:       PropTypes.object.isRequired,
  updateMsgs: PropTypes.func.isRequired,
};

export default AddMessage;