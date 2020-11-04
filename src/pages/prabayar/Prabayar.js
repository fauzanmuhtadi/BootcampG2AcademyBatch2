import React, { Component } from 'react';
import { Footer, Header, Menu } from '../../components';

class Prabayar extends Component {
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
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>Pembelian : Voucher Prabayar</p>
                        </div>
                        <div style={{height: '60%', width: '45%', borderStyle: 'solid', borderWidth: 2, borderRadius: 20, padding: 25}}>
                            <form>
                                <div style={{borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, textAlign: 'center'}}>
                                    <b>Aplikasi Pembelian</b>
                                </div>
                                <div>
                                    <div style={{marginTop: 20}}>
                                        <b>Rekening Sumber</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Rekening :</label>
                                            <input type='text' style={{width: '60%'}} />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20}}>
                                        <b>Data Pembelian</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Jenis Pembelian :</label>
                                            <input type='text' style={{width: '60%'}} value='Voucher HP' disabled />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Voucher :</label>
                                            <input type='text' style={{width: '60%'}} />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Nomor Pembelian :</label>
                                            <input type='text' style={{width: '60%'}} />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end'}}>
                                        <input type='submit' value='Verifikasi Aplikasi Pembelian' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Prabayar;