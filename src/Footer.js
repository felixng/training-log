import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './App.css';

class Footer extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <footer className="footer">
        {
          isAuthenticated() && (
              <div className="instagram-footer">
                <div className="totalSessions">
                  <div className="sub-heading">
                    Total sessions
                  </div>
                  <div className="heading">
                    X
                  </div>
                  <div className="sub-heading">
                    +/- from last week
                  </div>
                </div>
                <div className="weeklyActivity">
                  <div className="sub-heading">
                    Weekly activity
                  </div>
                  <div className="heading">
                    XX% active
                  </div>
                </div>
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <div className="footer">
                Link
                Link
                Link
                Link
              </div>
            )
        }
        </footer>
    );
  }
}

export default Footer;
