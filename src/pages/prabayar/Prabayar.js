import React, { Component } from 'react';
import { Footer, Header, Menu } from '../../components';
import Services from '../../services/Services';

class Prabayar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nasabah: {},
            vouchers: [],
            nomor: '',
            pin: '',
            harga: 0
        }
    }

    componentDidMount() {
        this.mulai();
        this.getVcr();
    }
    
    mulai = async () => {
        await this.setState({id: this.props.match.params.id})
        Services.getNasabahById(this.state.id).then( res => {
            this.setState({nasabah: res.data});
        })
    }

    getVcr = () => {
        Services.getVoucher().then( res => {
            this.setState({vouchers: res.data});
        })
    }

    pilihan = () => {
        for (var i = 0; i < this.state.vouchers.length; i++) {
            var plhn = new Option(this.state.vouchers[i].provider + " - Rp. " + this.state.vouchers[i].harga, this.state.vouchers[i].harga);
            document.getElementById('pilihan').options.add(plhn);
        }
    }

    changeNomor = (event) => {
        this.setState({nomor: event.target.value});
    }

    changePin = (event) => {
        this.setState({pin: event.target.value});
    }

    changePilihan = () => {
        var x = document.getElementById('pilihan');
        var y = x.selectedIndex;
        x.options[y].selected='true';
        this.setState({harga: x.options[y].value});
    }

    bayarVoucher = async (e) => {
        e.preventDefault();
        await this.mulai();
        if (this.state.pin === this.state.nasabah.pin) {
            let bayar = {
                id: this.state.id,
                nomor: this.state.nomor,
                harga: this.state.harga
            };
    
            Services.bayarOm(bayar).then(res => {alert(res.data)});
        } else {
            alert("Pin salah!");
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <Menu iniIdnya={this.state.id} />
                    <div style={{width: '80%', paddingLeft: '3%', paddingRight: '3%', paddingBottom: 20}}>
                        <div style={{marginBottom: 30}}>
                            <p style={{fontSize: 25, fontWeight: 'bold', marginTop: 30}}>Pembelian : Voucher Prabayar</p>
                        </div>
                        <div style={{height: '65%', width: '45%', borderStyle: 'solid', borderWidth: 2, borderRadius: 20, padding: 25}}>
                            <form>
                                <div style={{borderBottomStyle: 'solid', borderBottomWidth: 1, paddingBottom: 10, textAlign: 'center'}}>
                                    <b>Aplikasi Pembelian</b>
                                </div>
                                <div>
                                    <div style={{marginTop: 20}}>
                                        <b>Rekening Sumber</b>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Rekening :</label>
                                            <input type='text' value={this.state.nasabah.rekeningNumber} style={{width: '60%'}} readOnly />
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
                                            <select id='pilihan' onChange={this.changePilihan} style={{width: '61.7%'}}>
                                                <option value='0'>-- select voucher --</option>
                                                {this.pilihan()}
                                            </select>
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Nomor Pembelian :</label>
                                            <input type='text' onChange={this.changeNomor} style={{width: '60%'}} />
                                        </div>
                                        <div style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                            <label>Pin :</label>
                                            <input type='password' onChange={this.changePin} style={{width: '60%'}} />
                                        </div>
                                    </div>
                                    <div style={{marginTop: 20, display: 'flex', justifyContent: 'flex-end'}}>
                                        <input type='submit' onClick={this.bayarVoucher} value='B A Y A R' style={{cursor: 'pointer'}} />
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