import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './components/home';
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
      <View>
        {this.state.isLoggedIn ?
          <Home out={this.change} />
          :
          <Login changeLogin={this.change} />
        }
      </View>
    );
  }
}
 
export default App;