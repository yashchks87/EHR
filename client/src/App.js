import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Home from './components/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Forgotpassword from './containers/Forgotpassword';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EmailVerification from './components/EmailVerification';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/forgotpassword' component={Forgotpassword}/>
            <Route exact path='/emailverification' component={EmailVerification}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
