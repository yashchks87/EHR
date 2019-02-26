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
            <div className="navbar-item" id="brandName">
              <Link className='brandNam' to='/'>
                EHR
              </Link>
            </div>
          </div>
          <div className='navbar-end'>
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-link">
                  <Link className='login-text' to='/login'>Login</Link>
                </div>
                <div className='ml-4'></div>
                <div className="button is-light">
                  <Link to='/login'>Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
