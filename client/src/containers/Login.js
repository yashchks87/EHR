import React, { Component } from 'react';
import Navbar from '../components/Navbar';
// import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../CSS_Files/Login.css';
class Login extends Component{
  componentDidMount(){
    document.title = 'Sign in';
  }
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    };
  }
  inputData = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  submitData = event => {
    console.log(this.state);
    event.preventDefault();
    var sendData = {
      Email : this.state.email,
      password : this.state.password
    };
    console.log(sendData);
    axios
      .post('/api/routes/doctor/login', sendData)
      .then(()=>window.alert("Login successfully"))
      .catch(err=>console.log(err));
  }
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
            <form className='loginForm' onSubmit={this.submitData}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={this.inputData} aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={this.inputData} placeholder="Password"/>
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
