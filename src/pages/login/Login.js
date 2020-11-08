import React, { Component } from 'react';
import { Bank, Bintanguq, Captcha, Signver } from '../../util';
import Services from '../../services/Services';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            captcha: '',
            id: ''
        }
    }

    changeUserId = (event) => {
        this.setState({userId: event.target.value});
    }

    changePassword = (event) => {
        this.setState({password: event.target.value});
    }

    changeCaptcha = (event) => {
        this.setState({captcha: event.target.value});
    }

    sigin = async (e) => {
        e.preventDefault();
        if (this.state.captcha === 'nvfm98') {
            let masuk = {
                userId: this.state.userId,
                password: this.state.password
            };
    
            await Services.getNasabahs(masuk).then(res => {this.setState({id: res.data});});
            if (this.state.id === 'tidakAda') {
                alert("User Id atau password salah!");
                window.location.reload();
            } else {
                this.props.history.push('/beranda/' + this.state.id);
            }
        } else {
            alert("Capctha tidak sesuai!");
        }
    }

    registrasi = () => {
        window.location.replace('/registrasi');
    }

    render() { 
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{borderStyle: 'solid', height: 500, width: 450, marginTop: '10%', marginBottom: '10%', borderRadius: 20}}>
                        <div style={{marginTop: 15, textAlign: 'center'}}>
                            <img src={Bank} alt='bank' style={{height: 90, width: 90}} />
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>BANK SYARIAH BERJAMAAH</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{marginLeft: 28, marginRight: 30, marginTop: 15}}>
                                <img src={Bintanguq} alt='bintanguq' style={{height: 90, width: 90}} />
                            </div>
                            <div style={{marginTop: 15, flex: 1}}>
                                <form>
                                    <div style={{textAlign: 'end', marginRight: 28}}>
                                        <label>User ID :</label>
                                        <input type='text' value={this.state.userId} onChange={this.changeUserId} style={{marginLeft: 55}} autoComplete autoFocus />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'end', marginRight: 28}}>
                                        <label>Password :</label>
                                        <input type='password' value={this.state.password} onChange={this.changePassword} style={{marginLeft: 40}} />
                                    </div>
                                    <div style={{textAlign: 'end', marginRight: 28}}>
                                        <img src={Captcha} alt='captcha' style={{height:40, width: 100}} />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'end', marginRight: 28}}>
                                        <label>Captcha :</label>
                                        <input type='text' value={this.state.captcha} onChange={this.changeCaptcha} style={{marginLeft: 48}} autoComplete />
                                    </div>
                                    <div style={{textAlign: 'end', marginRight: 28}}>
                                        <input type='submit' onClick={this.sigin} style={{cursor: 'pointer'}} value='L O G I N' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>Don't have account? <span onClick={this.registrasi} style={{cursor: 'pointer'}}>Register</span></p>
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontSize: 12}}>Copy Right &copy; 2020 - PT Bank Syariah Berjamaah</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
                            <div style={{marginLeft: 28}}>
                                <div style={{fontSize: 10, marginBottom: 3, fontWeight: 'bold'}}>Syariah Berjamaah</div>
                                <div style={{fontSize: 10, marginBottom: 3, fontWeight: 'bold'}}>Call 18080</div>
                                <div style={{fontSize: 10, marginBottom: 3}}>atau 021-987654</div>
                            </div>
                            <div  style={{marginRight: 28, alignSelf: 'center'}}>
                                <img src={Signver} alt='signver' style={{height: 55, width: 50}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;