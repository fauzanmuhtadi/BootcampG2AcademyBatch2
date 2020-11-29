import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import Services from '../../services/Services';

class Tabungan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            nasabah: {}
        }
    }

    componentDidMount() {
        this.mulai();
    }
    
    mulai = async () => {
        await this.setState({id: this.props.dataId()})
        Services.getNasabahById(this.state.id).then( res => {
            this.setState({nasabah: res.data});
        })
    }

    render() { 
        return (
            <View style={{flex: 1, margin: 20}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, borderBottomWidth: 1}}>Aplikasi Informasi Tabungan</Text>
                <View style={{marginTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Rekening Sumber</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Rekening :</Text>
                        <TextInput value={this.state.nasabah.rekeningNumber} style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Data Nasabah</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Nama :</Text>
                        <TextInput value={this.state.nasabah.fullName} style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Alamat :</Text>
                        <TextInput value={this.state.nasabah.address} style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Saldo Akhir :</Text>
                        <TextInput value={this.state.nasabah.saldo} style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10}} />
                    </View>
                </View>
            </View>
        );
    }
}
 
export default Tabungan;