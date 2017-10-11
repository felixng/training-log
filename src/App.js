import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Button } from 'react-bootstrap';
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
      <div>
        <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Auth0 - React</a>
              </Navbar.Brand>
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
              </Button>
              {
                !isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                  )
              }
              {
                isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
                    </Button>
                  )
              }
              {
                isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
              }
            </Navbar.Header>
          </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">InstaProgress</h1>
        </header>
        <p className="App-intro">
          {this.props.children}
        </p>
      {/*TODO: Fix why children come after footer*/}
        {/*<footer className="footer">
          Link
          Link
          Link
          Link
        </footer>*/}
      </div>
    );
  }
}

export default App;
