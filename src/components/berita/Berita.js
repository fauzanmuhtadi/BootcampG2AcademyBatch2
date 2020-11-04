import React, { Component } from 'react';

class Berita extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{marginBottom: 35}}>
                <p style={{fontWeight: 'bold'}}>::: {this.props.judul} :::</p>
                <p style={{lineHeight: '1.6'}}>{this.props.isi}</p>
            </div>
        );
    }
}
 
export default Berita;