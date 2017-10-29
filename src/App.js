import React, { Component } from 'react';
import logo from './logo.png';
import * as html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
import './App.css';
import domtoimage from 'dom-to-image';
import ReactDOM from 'react-dom';
import svg2img from 'node-svg2img';
import FileSaver from 'file-saver';

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

  html() {
    html2canvas(document.body, {
      onrendered: function(canvas) {
        var dataUrl = canvas.toDataURL();
        var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        // document.body.appendChild(canvas);
      },
      width: 300,
      height: 300
    });
  }

  toPNG() {
    // var node = ReactDOM.findDOMNode(this.refs.root);
    var node = document.body;

    domtoimage.toPng(node, { quality: 0.1 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

  }

  toBlob() {
    // var node = ReactDOM.findDOMNode(this.refs.root);
    var node = document.body;

    domtoimage.toBlob(node, { quality: 0.2 })
            .then(function (blob) {
                FileSaver.saveAs(blob, 'my-node.jpg');
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
  }

  toSVG() {
    // var node = ReactDOM.findDOMNode(this.refs.root);
    var node = document.body;

    domtoimage.toSvg(node, { quality: 0.1 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.svg';
            link.href = dataUrl;
            console.log(dataUrl);
            link.click();
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <header className="App-header" ref="root">
        <h1 className="App-title">Jazzy Panda</h1>
        <div className="App-Nav">
          <Link to="/home" 
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
                  onClick={this.toBlob.bind(this)}>
                  Image
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
