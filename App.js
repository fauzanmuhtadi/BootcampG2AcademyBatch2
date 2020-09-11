/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Login, Home, Register } from './components/pages';
// import SampleMenu from './components/template/tes';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      enable: true,
      // dataBaru: [{fname: "ada", gmbr: "ada"}, {fname: "ada1", gmbr: "ada1"}]
    }
  }

  tab(value) {
    if (value === "Home") {
      this.setState({
        enable: false
      })
    } else {
      this.setState({
        enable: true
      })
    }
  }

  newData = async (datas) => {
    let dtbr = this.state.dataBaru
    const lastData = datas
    dtbr.push(lastData)

    await this.setState({
        dataBaru: dtbr
    })
    console.log(this.state.dataBaru)
  }

  render() {
    return (
      <>
        {/* <SampleMenu /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Register /> */}
        {this.state.enable ?
          <Login ubahLogin={() => this.tab("Home")} />
          :
          // <Register nihData={this.newData} />
          <Home keluar={() => this.tab("Keluar")} />
        }
    </>
    )
  }
};

export default App;