import React, { Component } from 'react';
import { Berita, Footer, Header, Menu } from '../../components';

class Informasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        this.setState({id: this.props.match.params.id})
    }

    render() { 
        return (
            <div>
                <Header />
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Menu iniIdnya={this.state.id} />
                    <div style={{width: '80%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: 20}}>
                        <div>
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>Informasi</p>
                        </div>
                        <Berita judul='Transaksi Keuangan' isi='Berdasarkan himbauan dari pemerintah, maka seluruh transaksi keuangan yang dilakukan Nasabah hanya dapat melalui sistem daring.' />
                        <Berita judul='Customer Center' isi='Nasabah yang terhormat, bila terdapat saran ataupun kendala, dapat menghubungi Customer Center kami di nomor 18080 atau 021-987654' />
                        <Berita judul='Hati-hati Penipuan Mengatasnamakan Bank Syariah Berjamaah!' isi='Bank Syariah Berjamaah tidak pernah meminta user Id, password, pin, maupun data lainnya. Apabila terdapat oknum yang meminta data tersebut, Nasabah dapat melaporkannya melalui nomor Customer Center di 18080 atau 021-987654.' />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Informasi;