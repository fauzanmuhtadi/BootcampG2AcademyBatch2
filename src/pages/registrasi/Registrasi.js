import React, { Component } from 'react';
import { Bank, Signver } from '../../util';
import Services from '../../services/Services';

class Registrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            address: '',
            email: '',
            phoe: '',
            userId: '',
            rekeningNumber: '',
            cardNumber: '',
            password: '',
            pin: null
        }
    }

    saveNasabah = (e) => {
        e.preventDefault();
        let nasabah = {
            fullName: this.state.fullName,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            userId: this.state.userId,
            rekeningNumber: this.state.rekeningNumber,
            cardNumber: this.state.cardNumber,
            password: this.state.password,
            pin: this.state.pin
        };
        console.log('nasabah => ' + JSON.stringify(nasabah));

        Services.createNasabah(nasabah).then(res => {alert(res.data)}).then(res => {this.props.history.push('/login');});
    }
    
    changeFullname = (event) => {
        this.setState({fullName: event.target.value});
    }

    changeAddress = (event) => {
        this.setState({address: event.target.value});
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    changePhone = (event) => {
        this.setState({phone: event.target.value});
    }

    changeUserId = (event) => {
        this.setState({userId: event.target.value});
    }

    changeRekeningNumber = (event) => {
        this.setState({rekeningNumber: event.target.value});
    }

    changeCardNumber = (event) => {
        this.setState({cardNumber: event.target.value});
    }

    changePassword = (event) => {
        this.setState({password: event.target.value});
    }

    changePin = (event) => {
        this.setState({pin: event.target.value});
    }

    cancel = () => {
        this.props.history.push('/login');
    }

    render() { 
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{borderStyle: 'solid', height: 650, width: 450, marginTop: '4%', marginBottom: '4%', borderRadius: 20}}>
                        <div style={{marginTop: 15, textAlign: 'center'}}>
                            <img src={Bank} alt='bank' style={{height: 90, width: 90}} />
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>BANK SYARIAH BERJAMAAH</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{marginTop: 15, marginLeft: 28, flex: 1, marginRight: 28}}>
                                <form autoComplete='on' >
                                    <div style={{textAlign: 'start', marginBottom: 10}}>
                                        <label>Fullname :</label>
                                        <input type='text' name='fullName' value={this.state.fullName} onChange={this.changeFullname} style={{marginLeft: 82, width: '58%'}} autoFocus autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Address :</label>
                                        <input type='text' name='address' value={this.state.address} onChange={this.changeAddress} style={{marginLeft: 88, width: '58%'}} autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Email :</label>
                                        <input type='text' name='email' value={this.state.email} onChange={this.changeEmail} style={{marginLeft: 109, width: '58%'}} autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Phone :</label>
                                        <input type='text' name='phone' value={this.state.phone} onChange={this.changePhone} style={{marginLeft: 101, width: '58%'}} minLength='11' maxLength='13' autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>User Id :</label>
                                        <input type='text' name='userId' value={this.state.userId} onChange={this.changeUserId} style={{marginLeft: 96, width: '58%'}} autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Rekening Number :</label>
                                        <input type='text' name='rekeningNumber' value={this.state.rekeningNumber} onChange={this.changeRekeningNumber} style={{marginLeft: 18, width: '58%'}} autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Card Number :</label>
                                        <input type='text' name='cardNumber' value={this.state.cardNumber} onChange={this.changeCardNumber} style={{marginLeft: 50, width: '58%'}} autoComplete />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Password :</label>
                                        <input type='password' name='password' value={this.state.password} onChange={this.changePassword} style={{marginLeft: 78, width: '58%'}} />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'start'}}>
                                        <label>Pin :</label>
                                        <input type='password' name='pin' value={this.state.pin} onChange={this.changePin} style={{marginLeft: 125, width: '58%'}} minLength='6' maxLength='6' />
                                    </div>
                                    <div style={{textAlign: 'end'}}>
                                        <input type='submit' onClick={this.saveNasabah} style={{cursor: 'pointer'}} value='S U B M I T' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>Already have an account? <span onClick={this.cancel} style={{cursor: 'pointer'}}>Login</span></p>
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
 
export default Registrasi;