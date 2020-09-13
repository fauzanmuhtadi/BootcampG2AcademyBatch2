import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/template';
import { Login } from './components/pages';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLogin: false //ubah false lagi ya dari true
    }
  }

  ubah = () => {
    this.setState({
      isLogin: true
    })
  }

  logout = () => {
    this.setState({
      isLogin: false
    })
  }

  awal = () => {
    if (this.state.isLogin === false) {
      return (
        <div>
          <Login
            ubahStatus={this.ubah}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Router>
            <NavBar
              logoutin={this.logout}
            />
          </Router>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        {this.awal()}
      </div>
    )
  }
}

export default App;