import React, { Component } from 'react';
import logo from './thumbnail.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Abhishek',
      lName: 'Shrivastava',
      logo: logo
    }
  }

  changeState = () => {
    this.setState({
        name: 'Abhishek1',
        lName: 'Shrivastava1'
    })
  }
  render() {
    return (
      <div>
        <div><img src={this.state.logo} /> <img src={this.state.logo} /> <img src={this.state.logo} /></div>
        <Header headerProp = {this.state.name} changeStateProp= {this.changeState} />
        <Footer FooterProp = {this.state.lName} />
        <button onClick= {this.changeState}>Click to change</button>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
      <div>{this.props.headerProp}</div>
      <button onClick={this.props.changeStateProp}>Child Button</button>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>{this.props.FooterProp}</div>
    );
  }
}

export default App;
