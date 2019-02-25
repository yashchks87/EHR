import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
class Home extends Component {
  componentDidMount(){
    document.title = "HOME";
  }
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default Home;
