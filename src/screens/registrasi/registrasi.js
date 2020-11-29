import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Bank } from '../../util';
import Services from '../../services/Services';

class Registrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            cardNumber: ''
        }
    }

    login = () => {
        this.props.loginOm()
    }

    regis = () => {
        Services.getNasabahByPhoneCardNumber(this.state.phone, this.state.cardNumber).then( res => {
            alert(res.data);
        })
    }

    render() { 
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#186a81', position: 'relative'}}>
                <View style={{backgroundColor: 'gray', height: 120, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
                    <Image source={Bank} style={{height: 80, width: 80}} />
                </View>
                <View style={{width: '80%', marginTop: 20}}>
                    <TextInput onChangeText={text => this.setState({phone: text})} keyboardType='phone-pad' textContentType='telephoneNumber' placeholderTextColor='#ffc271' placeholder='Phone' style={{height: 50, borderRadius: 50, textAlign: 'center', borderWidth: 1, borderColor: '#ffc271', color: '#ffc271'}} />
                    <TextInput onChangeText={text => this.setState({cardNumber: text})} keyboardType='numeric' textContentType='creditCardNumber' placeholderTextColor='#ffc271' placeholder='Card Number' style={{height: 50, borderRadius: 50, marginTop: 10, textAlign: 'center', borderWidth: 1, borderColor: '#ffc271', color: '#ffc271'}} />
                    <TouchableOpacity onPress={this.regis} style={{backgroundColor: '#ffc271', height: 50, borderRadius: 50, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>Submit</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', marginRight: 8}}>Already have an account?</Text>
                        <Text onPress={this.login} style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
                    </View>
                </View>
                <View style={{position: 'absolute', bottom: 5}}>
                    <Text style={{color: 'white'}}>Copy Right &copy; 2020 - PT Bank Syariah Berjamaah</Text>
                </View>
            </View>
        );
    }
}
 
export default Registrasi;