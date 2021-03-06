import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';
import '../CSS_Files/Signup.css';
export default class Signup extends Component{
  componentDidMount(){
    document.title = 'Sign up';
  }
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      rePassword : '',
      mobile : '',
      specialize : '',
      sex : ''
    }
  }
  inputData = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  submitData = event => {
    console.log(this.state);
    event.preventDefault();
    const sendData = {
      FirstName : this.state.firstName,
      LastName : this.state.lastName,
      Email : this.state.email,
      Mobile : this.state.mobile,
      Specialize : this.state.specialize,
      Sex : this.state.sex,
      Password : this.state.password,
      RePassword : this.state.rePassword
    }
    axios
      .post('/api/routes/doctor/register', sendData)
      .then(()=>console.log("Done"))
      .catch(err=>console.log(err));
  }
  render(){
    let {
      firstName,
      lastName,
      email,
      mobile,
      specialize,
      sex,
      password,
      rePassword
    }=this.state;
    const isInvalid = 
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      mobile === '' ||
      specialize === '' ||
      sex === '' ||
      password === '' ||
      rePassword === '';
    return(
      <div>
        <Navbar/>
        <div className='row main_signup'>
          <div className='col-lg-2'>
          </div>
          <div className='col-lg-8'>
            <div className='doc_signup'>
              Sign up
            </div>
            <div className='pt-5'></div>
            <div>
              <form onSubmit = {this.submitData}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control " name='firstName' onChange={this.inputData} placeholder="first name"/>
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control " name='lastName' onChange={this.inputData} placeholder="last name"/>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="form-group col-md-6">
                  <input type="email" className="form-control " name='email' onChange={this.inputData} placeholder="email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group col-md-6">
                  <input type="password" className="form-control " name='password' onChange={this.inputData} placeholder="Password"/>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="form-group col-md-6">
                  <input type="password" className="form-control" name='rePassword' onChange={this.inputData} placeholder="re-enter password"/>
                </div>
                <div className="form-group col-md-6">
                  <input type="number" className="form-control " name='mobile' onChange={this.inputData} placeholder="mobile"/>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control " name='specialize' onChange={this.inputData} placeholder="specialize"/>
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" name='sex' onChange={this.inputData} placeholder="gender"/>
                </div>
              </div>
              <div className='row'>
                <div className="col-lg-2"/>
                <div className="col-lg-8">
                  <button type="submit" disabled={isInvalid} className="btn btn-primary w-100 mt-3">Submit</button>
                </div>
                <div className="col-lg-2"/>
              </div>
              </form>
            </div>
          </div>
          <div className='col-lg-2'>
          </div>
          </div>
          <div className='fixed-bottom'>
            <Footer/>
          </div>
      </div>
    );
  }
}
