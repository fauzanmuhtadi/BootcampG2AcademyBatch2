import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        this.setState({id: this.props.iniIdnya})
    }

    beranda = () => {
        this.props.history.push('/beranda/' + this.state.id);
    }

    informasi = () => {
        this.props.history.push('/informasi/' + this.state.id);
    }

    tabungan = () => {
        this.props.history.push('/tabungan/' + this.state.id);
    }

    giro = () => {
        this.props.history.push('/giro/' + this.state.id);
    }

    prabayar = () => {
        this.props.history.push('/prabayar/' + this.state.id);
    }

    paket = () => {
        this.props.history.push('/paket/' + this.state.id);
    }

    keluar = () => {
        window.location.replace('/login');
    }

    render() {
        return (
            <div style={{width: '20%', backgroundColor: '#cae8ea', padding: 20}}>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Menu Utama</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.beranda}>Halaman Depan</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.informasi}>Informasi</p>
                    <p style={{fontWeight: 'bold', textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.keluar}>Logout</p>
                </div>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Rekening</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.tabungan}>Tabungan</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.giro}>Giro</p>
                </div>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Pembelian</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.prabayar}>Voucher Prabayar</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, cursor: 'pointer'}} onClick={this.paket}>Paket Data</p>
                </div>
            </div>
        );
    }
}
 
export default Menu;