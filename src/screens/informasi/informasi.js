import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Informasi extends Component {
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
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, borderBottomWidth: 1}}>Informasi</Text>
                <View style={{marginTop: 15}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Transaksi Keuangan :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Berdasarkan himbauan dari pemerintah, maka seluruh transaksi keuangan yang dilakukan Nasabah hanya dapat melalui sistem daring.</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Customer Center :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Nasabah yang terhormat, bila terdapat saran ataupun kendala, dapat menghubungi Customer Center kami di nomor 18080 atau 021-987654</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Hati-hati Penipuan Mengatasnamakan Bank Syariah Berjamaah! :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Bank Syariah Berjamaah tidak pernah meminta user Id, password, pin, maupun data lainnya. Apabila terdapat oknum yang meminta data tersebut, Nasabah dapat melaporkannya melalui nomor Customer Center di 18080 atau 021-987654.</Text>
                </View>
            </View>
        );
    }
}
 
export default Informasi;