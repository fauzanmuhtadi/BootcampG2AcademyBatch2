import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Sqlite from '../../../config/sqlite/sqlite';
import { setLogin } from '../../actions';

const db = new Sqlite
// var SQLite = require('react-native-sqlite-storage')
// var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~sqliteex.db'})

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
      keyword: ''
      // email: 'f****n@admin.com',
      // password: ''
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    let logins = [];
    db.listlogin().then(async (data) => {
      logins = data;
      // console.info(logins)
      // console.info(data)
      await this.setState({
        // logins
        email: logins[0].email,
        password: logins[0].password,
      })
      console.info(logins)
    }).catch((err) => {
      console.log(err)
    })
  }

  login = () => {
    if (this.state.keyword === this.state.password) {
      alert('Welcome, Fauzan!')
      this.props.changeLogin()
    } else {
      alert('Invalid password!!')
    }
  }
  
  setValue = (isi) => {
    this.setState({
      keyword: isi
    })
  }
    
	render() {
		return(
			<View style={styles.container}>
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
        )
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  }
});

const mapDispatchToProps = (dispatch) => ({
  changeLogin: () => dispatch(setLogin())
})

export default connect(null, mapDispatchToProps)(FormLogin);