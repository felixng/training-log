import React, { Component } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './App.css';

class Footer extends Component {
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
      <footer className="footer">
        Link
        Link
        Link
        Link
      </footer>
    );
  }
}

export default Footer;
