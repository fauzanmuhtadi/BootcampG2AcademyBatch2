import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{backgroundColor: '#186a81', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontSize: 12, color: 'white'}}>Copy Right &copy; 2020 - PT Bank Syariah Berjamaah</p>
            </div>
        );
    }
}
 
export default Footer;