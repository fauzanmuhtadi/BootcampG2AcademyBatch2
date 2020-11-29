import React, { Component } from 'react';
import Nav from './src/components/drawerNav/drawerNav';
import { Login, Registrasi } from './src/screens';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      isLogin: false,
      isRegist: false
    }
  }

  regis = () => {
    this.setState({isRegist: !this.state.isRegist})
  }

  login = async (dataId) => {
    await this.setState({id: dataId})
    this.setState({isLogin: !this.state.isLogin})
  }

  ambilId = () => {
    return this.state.id;
  }

  keluar = () => {
    this.setState({
      id: '',
      isLogin: !this.state.isLogin
    })
  }

  apa = () => {
    if (this.state.isRegist == true) {
      return <Registrasi loginOm={this.regis} />
    } else if (this.state.isLogin == true) {
      return <Nav iniId={this.ambilId} keluarOm={this.keluar} />
    } else {
      return <Login registOm={this.regis} masukOm={(dataId) => this.login(dataId)} />
    }
  }

  render() { 
    return (
      <>
        {this.apa()}
      </>
    );
  }
}
 
export default App;