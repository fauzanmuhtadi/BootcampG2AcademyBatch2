import React, { Component } from 'react';
import IndexApp from './components/indexapp';
import Camera from './components/camera';
import Login from './components/login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  change = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() { 
    return (
      <>
        {this.state.isLoggedIn ?
          <Camera out={this.change} />
          :
          <Login changeLogin={this.change} />
        }
      </>
    );
  }
}
 
export default App;