import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  increment = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  render() {
    const buttonStyle = {
      padding: '5px 10px',
      margin: '0 5px',
      fontSize: '16px',
      cursor: 'pointer',
    };

    const quantityStyle = {
      fontSize: '18px',
      margin: '0 10px',
    };

    return (
      <div>
        <button style={buttonStyle} onClick={this.decrement}>-</button>
        <span style={quantityStyle}>{this.state.quantity}</span>
        <button style={buttonStyle} onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
