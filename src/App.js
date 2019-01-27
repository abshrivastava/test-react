import React, { Component } from 'react';
// import logo from './thumbnail.png';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'Abhishek',
//       lName: 'Shrivastava',
//       // logo: logo
//     }
//   }


//   changeStateChild = (name,lname) => {
//     this.setState({
//         name: name,
//         lName: lname
//     })
//   }
//   render() {
//     return (
//       <div className="container">
//         <Header headerProp = {this.state.name} changeStateChild = {this.changeStateChild} />
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   changeStateEvent = () => {
//     this.props.changeStateChild("Abhishek3","shrivastav3")
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.props.headerProp}</div>
//         <button onClick={this.changeStateEvent}>Child Button</button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   changeStateEvent = () => {
//     this.refs.headerChild.changeStateChild('Abhishek', 'Don')  
//   }
//   render() {
//     return (
//       <div className="container">
//         <Header ref="headerChild" />
//         <button onClick={this.changeStateEvent}>Child Button</button>
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'Abhishek Child',
//       lName: 'Shrivastava'
//     }
//   }
//   changeStateChild = (name,lname) => {
//     this.setState({
//         name: name,
//         lName: lname
//     })
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.name}</div>
//       </div>
//     );
//   }

// }

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list: [
          { id: '1', name: 'Aarav', age: 1 },
          { id: '2', name: 'Abhishek', age:40 },
          { id: '3', name: 'Tuli', age: 22 },
        ],
      };
    }
  render() {
    return (
      <div className="container">
        <TodoList data={this.state.list} />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <div>
         <ul>
          {this.props.data.map(item => (
            <li key={item.id}>
              Id: {item.id}<br />
              Name: {item.name}<br />
              Age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
