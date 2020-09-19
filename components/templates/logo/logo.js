import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:120, height: 120, borderRadius: 100}}
          			source={require('../../images/foto.jpeg')}/>
          		<Text style={styles.logoText}>Welcome, Fauzan!</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText: {
  	marginVertical: 15,
  	fontSize:18,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});

export default Logo;