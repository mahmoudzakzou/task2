import React, { Component } from 'react';

import { Container, Button } from 'react-bootstrap';
import Login from '../Login';
import SignUp from '../../SignUp/SignUp';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
  }

  toggleComponent = () => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin,
    }));
  };

  render() {
    return (
      <Container className="mt-5">
        <div className="text-center mb-4">
          <Button
            className="mx-2"
            variant={this.state.showLogin ? "secondary" : "primary"}
            onClick={this.toggleComponent}
          >
            {this.state.showLogin ? "Switch to Sign Up" : "Switch to Login"}
          </Button>
        </div>
        {this.state.showLogin ? <Login /> : <SignUp />}
      </Container>
    );
  }
}

export default Register;
