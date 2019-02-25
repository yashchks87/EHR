import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '../CSS_Files/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-danger" id="navid" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" id="brandName">
              EHR
            </a>
          </div>
          <div className='navbar-end'>
            <div className="navbar-item">
              <div class="buttons">
                <a class="button is-link">
                  <Link className='login-text' to='/login'>Login</Link>
                </a>
                <div className='ml-4'></div>
                <a class="button is-light">
                  <Link to='/login'>Signup</Link>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
