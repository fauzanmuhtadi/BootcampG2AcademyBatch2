import React, { Component } from 'react';
import { Text, TouchableOpacity, Button, TextInput, Image, StyleSheet, View } from 'react-native';
// import ImageBkr from './ImageBkr';
// import UselessTextInput from './UselessTextInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Fa***20",
      password: ""
    }
  }

  dataPass = () => {
    if (this.state.password === "admin") {
      alert('Welcome, Fauzan!')
      this.props.ubahLogin()
    } else {
      alert('Invalid password!!')
    }
  }

  render() {
    return (
      <View style={styles.backgrd1}>
          <View style={styles.backgrd}>
            <Image
              style={styles.photo}
              source={{uri:"https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"}}
            />
            <TextInput
              style={styles.inputan}
              textContentType="username"
              value={this.state.user}
              placeholderTextColor="white"
              disabled
            />
            <TextInput
              style={styles.inputan}
              textContentType="password"
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={text => this.setState({password:text})}
            />
            <TouchableOpacity onPress={() => alert('Forgot password!')}>
              <Text style={{color: "white", marginBottom: 20}}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              title="Login"
              style={styles.loginBtn}
              onPress={this.dataPass}
            />
            <TouchableOpacity onPress={() => alert('Sign Up')}>
              <Text style={{color: "white", marginBottom: 20}}>Sign Up</Text>
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
    // padding: 20,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    justifyContent: "center",
    color: 'white'
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
  photo: {
    height: 100,
    width: 100,
    marginBottom: 20
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    marginTop: 40,
    marginBottom: 10
   }
});

export default Login;