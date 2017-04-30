import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render(){
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Hello name="John" />
    );
  }
}

export default App;
