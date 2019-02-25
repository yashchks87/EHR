import React, { Component } from 'react';
import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import '../CSS_Files/Login.css';
class Login extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className='row'>
          <div className='col-lg-2'>
          </div>
          <div className='col-lg-3'>
            <div className='signin_text'>
              Sign in
            </div>
            <form className='loginForm'>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary loginsubmitbt">Submit</button>
            </form>
            <div className='forgot'>
              <Link to='/forgotpassword'>Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
