import React, { Component } from 'react';
import 'react-bootstrap'
import { Container, FormGroup } from 'react-bootstrap';
class Login extends Component {
 
  render() {
    

    return (
      <div>
       <Container>
       <FormGroup className='m-5'>
        <h1 className=' text-center fs-5' >Login</h1>
       <label htmlFor="">email</label>
        <input type="email" name="email" id="email" required className=' form-control' />
        <label htmlFor="">password</label>
        <input type="password" name="password" id="password"    className=' form-control' required />
     
        
       </FormGroup>
       </Container>

      </div>
    );
  }
}

export default Login;
