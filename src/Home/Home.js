import React, { Component } from 'react';
import Frame from '../Components/Frame';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const WEEKLY_DATA = {
      'Monday': {
        'sessions': [null, null, null]
      },
      'Tuesday': {
        'sessions': [null, null, null]
      },
      'Wednesday': {
        'sessions': [null, null, null]
      },
      'Thursday': {
        'sessions': [null, null, null]
      },
      'Friday': {
        'sessions': [null, null, null]
      },
      'Saturday': {
        'sessions': [null, null, null]
      },
      'Sunday': {
        'sessions': [null, null, null]
      }
    };

    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <Frame data={WEEKLY_DATA} />
            )
        }
        {
          !isAuthenticated() && (
              <div className="guest-content">
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
                <iframe title='Indroduction Video by Jazzy Panda' width="560" height="315" src="https://www.youtube.com/embed/EykWcFEtFqo" frameBorder="0" allowFullScreen></iframe>
              </div>
            )
        }
      </div>
    );
  }
}

export default Home;
