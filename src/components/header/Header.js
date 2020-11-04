import React, { Component } from 'react';
import { Bank } from '../../util';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{padding: 30, textAlign: 'center', backgroundColor: '#186a81'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{height: 150, width: 150, backgroundColor: 'gray', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={Bank} alt='bank' style={{height: 100, width: 100}} />
                    </div>
                </div>
                <h1 style={{color: '#ffc271'}}>BANK SYARIAH BERJAMAAH</h1>
                <p style={{color: '#ffc271'}}>Amanah, Jujur, Terpercaya</p>
            </div>
        );
    }
}
 
export default Header;