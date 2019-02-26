import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../CSS_Files/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" id="brandName">
              EHR
            </a>
          </div>
          <div className='navbar-end'>
            <div className="navbar-item">
              <div className="buttons">
                  <a className="button is-link">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
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
