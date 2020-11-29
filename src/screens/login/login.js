import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Bank } from '../../util';
import Services from '../../services/Services';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userId: null,
            password: null
        }
    }

    registrasi = () => {
        this.props.registOm()
    }

    login = async () => {
        if (this.state.userId === null || this.state.password === null) {
            alert("Harap masukkan User Id dan Password!")
        } else {
            await Services.getNasabahByUserPass(this.state.userId, this.state.password).then( res => {
                this.setState({id: res.data});
            })
            if (this.state.id === 'tidakAda') {
                alert("User Id atau password salah!");
                // window.location.reload();
            } else if (this.state.id === 'unregis') {
                alert("Harap registrasi layanan M-Banking terlebih dahulu!");
                // window.location.reload();
            } else {
                this.props.masukOm(this.state.id)
            }
        }
    }

    render() { 
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#186a81', position: 'relative'}}>
                <View style={{backgroundColor: 'gray', height: 120, width: 120, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
                    <Image source={Bank} style={{height: 80, width: 80}} />
                </View>
                <View style={{width: '80%', marginTop: 20}}>
                    <TextInput onChangeText={text => this.setState({userId: text})} textContentType='username' placeholderTextColor='#ffc271' placeholder='User Id' style={{height: 50, borderRadius: 50, textAlign: 'center', borderWidth: 1, borderColor: '#ffc271', color: '#ffc271'}} />
                    <TextInput onChangeText={text => this.setState({password: text})} textContentType='password' secureTextEntry={true} placeholderTextColor='#ffc271' placeholder='Password' style={{height: 50, borderRadius: 50, marginTop: 10, textAlign: 'center', borderWidth: 1, borderColor: '#ffc271', color: '#ffc271'}} />
                    <TouchableOpacity onPress={this.login} style={{backgroundColor: '#ffc271', height: 50, borderRadius: 50, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', marginRight: 8}}>Don't have account?</Text>
                        <Text onPress={this.registrasi} style={{color: 'white', fontWeight: 'bold'}}>Register</Text>
                    </View>
                </View>
                <View style={{position: 'absolute', bottom: 5}}>
                    <Text style={{color: 'white'}}>Copy Right &copy; 2020 - PT Bank Syariah Berjamaah</Text>
                </View>
            </View>
        );
    }
}
 
export default Login;