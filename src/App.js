import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <header className="App-header">
        <h1 className="App-title">Jazzy Panda</h1>
        <div className="App-Nav">
          <Link to="/home" 
            activeClassName="active"
            className="btn-margin"
            onClick={this.goTo.bind(this, 'home')}>
           Home
          </Link>
          {
            !isAuthenticated() && (
                <Link to="/"
                  className="btn-margin"
                  onClick={this.login.bind(this)}>
                  Log In
                </Link>
              )
          }
          {
            isAuthenticated() && (
                <Link to="/profile"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'profile')}>
                  Profile
                </Link>
              )
          }
          {
            isAuthenticated() && (
                <Link to="/"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}>
                  Log Out
                </Link>
              )
          }
        </div>
      </header>
    );
  }
}

export default App;
