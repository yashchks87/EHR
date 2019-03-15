import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../CSS_Files/forgotpass.css';
import {Carousel} from 'react-bootstrap';
import Footer from '../components/Footer';
export default class Forgotpassword extends Component{
  constructor(props){
    super(props);
    this.state={
      email: "",
      reEmail:""
    }
  }
  inputData = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  submitData = event => {
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    let {
      email,
      reEmail
    }=this.state;
    const isInvalid = 
    email === '' ||
    reEmail === '';
    return(
      <div>
        <Navbar/>
        <Carousel controls={false}>
          <Carousel.Item>
            <img className='image w-100 expand-lg' alt='Forgot_pass' src={require('../Images/Forgot_pass.jpg')}/>
            <Carousel.Caption className='mt-2'>
              <h1 className="display-4">Trouble signing in?</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="row">
          <div className="col-lg-2"/>
          <div className="col-lg-8">
            <p className="d-flex justify-content-center mt-2"><b>Please write your email and get started.</b></p>
            <div className="row">
              <div className="col-lg-2"/>
              <div className="col-lg-8">
                <form className="mt-5 mx-4" onSubmit={this.submitData}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name="email" onChange={this.inputData} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Re-enter email</label>
                    <input type="password" class="form-control" name="reEmail" onChange={this.inputData} id="exampleInputPassword1" placeholder="re-enter email"/>
                  </div>
                  <button type="button" disabled={isInvalid} class="btn w-100 btn-primary">Submit</button>  
                </form>
              </div>
              <div className="col-lg-2"/>
            </div>
          </div>
          <div className="col-lg-2"/>
        </div>
        <div className="fixed-bottom">
          <Footer/>
        </div>
      </div>
    );
  }
}
