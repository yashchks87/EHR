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
              <div class="buttons">
                  <a class="button is-link">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
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
