import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
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
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, borderBottomWidth: 1}}>BSB M-Banking</Text>
                <View style={{marginTop: 15}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Promo Milad 21 Pembayaran PLN Post dan Prepaid :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Dapatkan cashback 21 ribu, setiap transaksi pembayaran PLN post dan prepaid di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Promo Milad 21 Pembayaran PDAM :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Dapatkan cashback 21 ribu, setiap transaksi pembayaran PDAM di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Promo Milad 21 Pembayaran BPJS Kesehatan :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Dapatkan cashback 21 ribu, setiap transaksi pembayaran BPJS Kesehatan di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.</Text>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{textAlign: 'justify', fontWeight: 'bold', fontSize: 16}}>::: Promo Milad 21 Bukalapak :::</Text>
                    <Text style={{textAlign: 'justify', marginTop: 5, fontSize: 15}}>Dapatkan cashback 21 ribu, dengan belanja online di Bukalapak menggunakan virtual account syariah berjamaah (kode voucher BSBMILAD) di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.</Text>
                </View>
            </View>
        );
    }
}
 
export default Home;