import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class Giro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        this.setState({id: this.props.dataId()});
    }

    render() { 
        return (
            <View style={{flex: 1, margin: 20}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, borderBottomWidth: 1}}>Aplikasi Informasi Giro</Text>
                <View style={{marginTop: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Rekening Sumber</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Rekening :</Text>
                        <TextInput value='Tidak ada data' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10, fontStyle: 'italic'}} editable={false} />
                    </View>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Data Nasabah</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Nama :</Text>
                        <TextInput value='Tidak ada data' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10, fontStyle: 'italic'}} editable={false} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Alamat :</Text>
                        <TextInput value='Tidak ada data' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10, fontStyle: 'italic'}} editable={false} />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                        <Text style={{fontSize: 15}}>Saldo Akhir :</Text>
                        <TextInput value='Tidak ada data' style={{height: 25, width: '60%', borderWidth: 1, paddingVertical: 0, paddingHorizontal: 10, fontStyle: 'italic'}} editable={false} />
                    </View>
                </View>
            </View>
        );
    }
}
 
export default Giro;