import React, { Component } from 'react';
import { Text, View, Button, FlatList, StyleSheet, StatusBar } from 'react-native';
// import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { setLogout } from '../../actions';


// const Item = ({ title }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
// );

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            DATA: []
        }
    }

    isLogout = () => {
        this.props.keluar()
    }
    
    // renderItem = ({ item }) => (
    //     <Item title={item.title} />
    // );
    // renderItem = ({ item }) => (
    //     <View style={styles.item}>
    //         <Text style={styles.title}>{item.title}</Text>
    //     </View>
    // );

    componentDidMount() {
        this.ini()
    }

    ini = async () => {
        await this.setState({
            DATA: this.props.hehe
        })
        console.info(this.state.DATA)
    }
    
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button title='Logout' color='red' onPress={this.isLogout} />
                <FlatList
                    data={this.state.DATA}
                    renderItem={({item}) => <Text style={styles.title}>{item.title}</Text>}
                    // keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
})

const mapStateToProps = (state) => ({
    hehe: state.data.nihData
})

const mapDispatchToProps = (dispatch) => ({
    keluar: () => dispatch(setLogout())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 
// export default Home;