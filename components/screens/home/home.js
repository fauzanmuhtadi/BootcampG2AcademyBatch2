import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { setLogout } from '../../actions';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    isLogout = () => {
        this.props.keluar()
    }
    
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button title='Logout' color='red' onPress={this.isLogout} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    keluar: () => dispatch(setLogout())
  })
  
export default connect(null, mapDispatchToProps)(Home);
 
// export default Home;