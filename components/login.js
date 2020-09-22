import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'f****n@admin.com',
            password: ''
        }
    }

    setValue = (isi) => {
        this.setState({
          password: isi
        })
    }

    login = () => {
        if (this.state.password === 'admin123') {
            this.props.changeLogin()
            Alert.alert('Welcome!', 'Fauzan')
        } else {
            alert('Invalid password!')
        }
    }

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.container1}>
                    <Image  style={{width:120, height: 120, borderRadius: 100}}
                        source={require('./avatar.jpg')}/>
                    <Text style={styles.logoText}>Welcome, Fauzan!</Text>	
                </View>

				<View style={styles.container2}>
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Email"
                        placeholderTextColor = "#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        value={this.state.email}
                    />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor = "#ffffff"
                        onChangeText={this.setValue}
                    />  
                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>     
                </View>

                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signupButton}> Signup</Text>
                    </TouchableOpacity>
                </View>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#455a64',
    // flex: 1,
    // flexGrow: 1,
    paddingTop: 150,
    paddingBottom: 210,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont: {
  	// flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  container1: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText: {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  },
  container2: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 240
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});

export default Login;