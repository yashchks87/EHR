import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import Footer from './Footer';
class Home extends Component {
  componentDidMount(){
    document.title = "HOME";
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="fixed-bottom">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;