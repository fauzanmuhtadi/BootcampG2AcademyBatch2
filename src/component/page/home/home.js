import React, { Component } from 'react';
import { connect } from "react-redux";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        return ( 
            <div>
                <h1>Selamat datang {this.props.siapaUser}!</h1>
                <h2>:)</h2>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    siapaUser: state.login.username
})
 
// export default Home;
export default connect(mapStateToProps)(Home);