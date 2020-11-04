import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{width: '20%', backgroundColor: '#cae8ea', padding: 20}}>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Menu Utama</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Halaman Depan</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Informasi</p>
                    <p style={{fontWeight: 'bold', textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Logout</p>
                </div>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Rekening</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Tabungan</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Giro</p>
                </div>
                <div>
                    <p style={{backgroundColor: '#186a81', color: '#ffc271', textAlign: 'center', fontWeight: 'bold', paddingBottom: 3, paddingTop: 3}}>Pembelian</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Voucher Prabayar</p>
                    <p style={{textAlign: 'end', borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10}}>Paket Data</p>
                </div>
            </div>
        );
    }
}
 
export default Menu;