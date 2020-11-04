import React, { Component } from 'react';
import { Footer, Header, Menu } from '../../components';

class Giro extends Component {
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
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>Rekening : Giro</p>
                        </div>
                        <div style={{height: '60%', width: '45%', borderStyle: 'solid', borderWidth: 2, borderRadius: 20, padding: 25}}>
                            <form>
                                <div style={{borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, textAlign: 'center'}}>
                                    <b>Aplikasi Informasi Giro</b>
                                </div>
                                <div>
                                    <div style={{marginTop: 20}}>
                                        <b>Rekening Sumber</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Rekening :</label>
                                            <input type='text' style={{width: '60%'}} />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end'}}>
                                        <input type='submit' value='Submit' />
                                    </div>
                                    <div style={{marginTop: 20}}>
                                        <b>Data Nasabah</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Nama :</label>
                                            <input type='text' style={{width: '60%'}} disabled />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Alamat :</label>
                                            <input type='text' style={{width: '60%'}} disabled />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Saldo Akhir :</label>
                                            <input type='text' style={{width: '60%'}} disabled />
                                        </div>
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
 
export default Giro;