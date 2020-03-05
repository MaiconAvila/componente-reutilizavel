import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button 
      style={{
        backgroundColor: this.props.background,
        border: this.props.border,
      }} 
      onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
