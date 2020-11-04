import React, { Component } from 'react';
import { Bank, Bintanguq, Captcha, Signver } from '../../util';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                        <input type='text' style={{marginLeft: 55}} />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'end', marginRight: 28}}>
                                        <label>Password :</label>
                                        <input type='password' style={{marginLeft: 40}} />
                                    </div>
                                    <div style={{textAlign: 'end', marginRight: 28}}>
                                        <img src={Captcha} alt='captcha' style={{height:40, width: 100}} />
                                    </div>
                                    <div style={{marginTop: 5, marginBottom: 10, textAlign: 'end', marginRight: 28}}>
                                        <label>Captcha :</label>
                                        <input type='text' style={{marginLeft: 48}} />
                                    </div>
                                    <div style={{textAlign: 'end', marginRight: 28}}>
                                        <input type='submit' value='L O G I N' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>Don't have account? Register</p>
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