import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl, Alert, TouchableOpacity } from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DATA: []
        }
    }

    UNSAFE_componentWillMount() {
        this.datas()
    }

    datas = () => {
        fetch('https://jsonplaceholder.typicode.com/photos') //albumId 1-100, id 1-5000, title, url, thumbnailUrl
            .then(response => response.json())
            .then((json) => {
                let newPhotos = json
                newPhotos.splice(20, 4980)
                this.setState({
                    DATA: newPhotos
                })
            })
            .catch(error => console.log('Parsing failed!', error))
    }

    logout = () => {
        this.props.out()
    }

    render() { 
        let refreshing = false
        const onRefresh = () => {
            refreshing = true
            console.log(refreshing);

            setTimeout(() => {
                refreshing = false
                console.log(refreshing);
                Alert.alert('Pull to refresh', 'It work!')
            }, 1000)
        }

        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.heading}>
                    <Text style={{color: 'white', padding: 5, fontSize: 20}}>HOME</Text>
                    <View>
                        <TouchableOpacity onPress={this.logout}>
                            <Text style={{backgroundColor: 'red', color: 'white', padding: 5}}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={this.state.DATA}
                    renderItem={({item}) => <Text style={styles.title}>{item.title}</Text>}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
                    onEndReachedThreshold={0.2}
                    onEndReached={(sisa) => {
                        Alert.alert('On End Reached ', '3 terbawah');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: 'grey',
        height: 50,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        margin: 10,
        borderStyle: 'solid',
        borderColor: 'black',
    },
})
 
export default Home;