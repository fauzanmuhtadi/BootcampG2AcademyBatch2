import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Setting</Text>
            </View>
        );
    }
}
 
export default Setting;