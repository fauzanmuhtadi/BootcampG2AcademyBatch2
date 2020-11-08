import React, { Component } from 'react';
import { Footer, Header, Menu } from '../../components';
import Services from '../../services/Services';

class Tabungan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nasabah: {}
        }
    }

    componentDidMount() {
        this.mulai();
    }
    
    mulai = async () => {
        await this.setState({id: this.props.match.params.id})
        Services.getNasabahById(this.state.id).then( res => {
            this.setState({nasabah: res.data});
        })
    }

    render() { 
        return (
            <div>
                <Header />
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Menu iniIdnya={this.state.id} />
                    <div style={{width: '80%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: 20}}>
                        <div style={{marginBottom: 30}}>
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>Rekening : Tabungan</p>
                        </div>
                        <div style={{height: '60%', width: '45%', borderStyle: 'solid', borderWidth: 2, borderRadius: 20, padding: 25}}>
                            <form>
                                <div style={{borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, textAlign: 'center'}}>
                                    <b>Aplikasi Informasi Tabungan</b>
                                </div>
                                <div>
                                    <div style={{marginTop: 20}}>
                                        <b>Rekening Sumber</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Rekening :</label>
                                            <input type='text' value={this.state.nasabah.rekeningNumber} style={{width: '60%'}} readOnly />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end'}}>
                                        <input type='submit' value='Submit' style={{cursor: 'pointer'}} />
                                    </div>
                                    <div style={{marginTop: 20}}>
                                        <b>Data Nasabah</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Nama :</label>
                                            <input type='text' style={{width: '60%'}} value={this.state.nasabah.fullName} readOnly />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Alamat :</label>
                                            <input type='text' style={{width: '60%'}} value={this.state.nasabah.address} readOnly />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Saldo Akhir :</label>
                                            <input type='text' style={{width: '60%'}} value={this.state.nasabah.saldo} readOnly />
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
 
export default Tabungan;