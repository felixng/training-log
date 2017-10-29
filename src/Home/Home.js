import React, { Component } from 'react';
import Frame from '../Components/Frame';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <Frame />
            )
        }
        {
          !isAuthenticated() && (
              <div>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </div>
            )
        }
      </div>
    );
  }
}

export default Home;
