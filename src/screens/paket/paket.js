import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Services from '../../services/Services';

class Paket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            nasabah: {},
            pakets: [],
            nomor: null,
            pin: null,
            harga: '-- select paket data --'
        }
    }

    componentDidMount() {
        this.mulai();
        this.getPkt();
    }
    
    mulai = async () => {
        await this.setState({id: this.props.dataId()})
        Services.getNasabahById(this.state.id).then( res => {
            this.setState({nasabah: res.data});
        })
    }

    getPkt = () => {
        Services.getPaket().then( res => {
            this.setState({pakets: res.data});
        })
    }

    bayarPaket = () => {
        if (this.state.nomor === null) {
            alert("Harap masukkan nomor pembelian!")
        } else {
            if (this.state.pin === this.state.nasabah.pin) {
                let bayar = {
                    id: this.state.id,
                    nomor: this.state.nomor,
                    harga: this.state.harga
                };
        
                Services.bayarOm(bayar).then(res => {alert(res.data)});
            } else {
                alert("Pin salah!");
            }
        }
    }
    
    render() { 
        return (
            <View style={{flex: 1, margin: 20}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, borderBottomWidth: 1}}>Aplikasi Pembelian</Text>
                <View style={{marginTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Rekening Sumber</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Rekening :</Text>
                        <TextInput value={this.state.nasabah.rekeningNumber} style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Data Pembelian</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Jenis Pembelian :</Text>
                        <TextInput value='Paket Data' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} editable={false} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Paket Data :</Text>
                        <View style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0}}>
                            <Picker
                                selectedValue={this.state.harga}
                                style={{flex: 1}}
                                onValueChange={(itemValue) =>
                                    this.setState({harga: itemValue})
                                }>
                                <Picker.Item label="-- select paket data --" value="0" />
                                {this.state.pakets.map((myValue, myIndex) => {
                                        return (
                                            <Picker.Item label={myValue.provider + " - Rp. " + myValue.harga} value={myValue.harga} key={myIndex} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Nomor Pembelian :</Text>
                        <TextInput onChangeText={text => this.setState({nomor: text})} keyboardType='phone-pad' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Pin :</Text>
                        <TextInput secureTextEntry={true} onChangeText={text => this.setState({pin: text})} keyboardType='number-pad' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                    <View style={{marginVertical: 15}}>
                        <TouchableOpacity onPress={this.bayarPaket} style={{backgroundColor: '#ffc271', height: 50, borderRadius: 50, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>Bayar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
 
export default Paket;