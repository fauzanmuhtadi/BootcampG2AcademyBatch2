import React, { Component } from 'react';
import { Berita, Footer, Header, Menu } from '../../components';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Header />
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Menu />
                    <div style={{width: '80%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: 20}}>
                        <div style={{marginBottom: 30}}>
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>BSBNet</p>
                            <p style={{marginTop: -20}}>Selamat datang di <b>BSBNet</b>.</p>
                            <p style={{marginTop: -10}}>Jangan lupa lakukan <b>logout</b> setelah anda selesai menggunakan aplikasi ini.</p>
                            <p>Terima kasih.</p>
                        </div>
                        <Berita judul='Promo Milad 21 Pembayaran PLN Post dan Prepaid' isi='Dapatkan cashback 21 ribu, setiap transaksi pembayaran PLN post dan prepaid di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.' />
                        <Berita judul='Promo Milad 21 Pembayaran PDAM' isi='Dapatkan cashback 21 ribu, setiap transaksi pembayaran PDAM di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.' />
                        <Berita judul='Promo Milad 21 Pembayaran BPJS Kesehatan' isi='Dapatkan cashback 21 ribu, setiap transaksi pembayaran BPJS Kesehatan di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.' />
                        <Berita judul='Promo Milad 21 Bukalapak' isi='Dapatkan cashback 21 ribu, dengan belanja online di Bukalapak menggunakan virtual account syariah berjamaah (kode voucher BSBMILAD) di BSBNet, syariah berjamaah mobile, dan syariah berjamaah ATM. Syarat dan Ketentuan Berlaku. Info hubungi syariah berjamaah call 18080.' />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Home;