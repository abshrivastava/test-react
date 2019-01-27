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
    this.refs.headerChild.changeState();
  }
  changeStateThroughNode = (name,lname) => {
    this.setState({
        name: name,
        lName: lname
    })
  }
  render() {
    return (
      <div>
        <div><img src={this.state.logo} /> <img src={this.state.logo} /> <img src={this.state.logo} /></div>
        <Header headerProp = {this.state.name} changeStateThroughNode = {this.changeStateThroughNode} ref="headerChild" />
        <Footer FooterProp = {this.state.lName} changeStateProp= {this.changeState} />
        <button onClick= {this.changeState}>Click to change</button>
      </div>
    );
  }
}

class Header extends Component {
  changeState = () => {
    this.props.changeStateThroughNode("Abhishek3","shrivastav3")
  }
  render() {
    return (
      <div>
        <div>{this.props.headerProp}</div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
      <div>{this.props.FooterProp}</div>
      <button onClick={this.props.changeStateProp}>Child Button</button>
      </div>
    );
  }
}

export default App;
