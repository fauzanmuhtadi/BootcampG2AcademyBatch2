import React, { Component } from 'react';
import { Text, TouchableOpacity, Button, TextInput, Image, StyleSheet, View } from 'react-native';
// import ImageBkr from './ImageBkr';
// import UselessTextInput from './UselessTextInput';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullname: "",
        image: "",
        dataBaru: []
    }
  }

  newData = () => {
    let fname = this.state.fullname
    let gmbr = this.state.image
    // let dtbr = this.state.dataBaru
    // const lastData = { fname, gmbr }
    // dtbr.push(lastData)

    // await this.setState({
    //     dataBaru: dtbr
    // })
    console.log(this.state.dataBaru)
    this.props.nihData({ fname, gmbr })
  }

  render() {
    return (
      <View style={styles.backgrd1}>
          <View style={styles.backgrd}>
            <Text style={styles.heading}>FORM REGISTER</Text>
            <TextInput
              style={styles.inputan}
            //   textContentType="username"
              placeholder="Full Name"
              placeholderTextColor="white"
              onChangeText={text => this.setState({fullname:text})}
            />
            <TextInput
              style={styles.inputan}
            //   textContentType="image"
              placeholder="URL Image"
              placeholderTextColor="white"
              onChangeText={text => this.setState({image:text})}
            />
            <TouchableOpacity
              title="Register"
              style={styles.loginRgs}
              onPress={this.newData}
            >
                <Text style={styles.textdlm}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputan: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    justifyContent: "center",
    color: 'white'
  },
  heading: {
      color: 'white',
      fontSize: 20,
      marginBottom: 10,
  },
  backgrd1: {
    flex: 1,
    backgroundColor: '#465881'
  },
  backgrd: {
    flex: 1,
    backgroundColor: '#465881',
    justifyContent: "center",
    alignItems: "center"
  },
  textdlm: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  loginRgs: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    // marginBottom: 10,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: 'green',
    color: 'white'
   }
});

export default Register;