import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class AlbumTiga extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            photos: []
         }
    }

    updateSearch = async (value) => {
        await this.setState({
            search: value
        });
        console.log(this.state.search);
    }

    componentDidMount() {
        this.takePhotos()
    }

    takePhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos') //albumId 1-100, id 1-5000, title, url, thumbnailUrl
            .then(response => response.json())
            .then(async (json) => {
                let newPhotos = json
                let blkg = newPhotos.splice(150, 4850)
                let depan = blkg.splice(0, 100)
                await this.setState({
                    photos: depan
                })
                // console.log(this.state.photos);
            })
            .catch(error => console.log('Parsing failed!', error))
    }

    // showAlbums = () => {
    //     this.state.albums.map()
    // }

    home() {
        Actions.home()
    }

    keluar() {
        Actions.login()
    }

    render() { 
        return ( 
            <ScrollView style={styles.backgrd1}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                <Button onPress={this.home} title="Home" />
                <Button color='red' onPress={this.keluar} title="Logout" />
                <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                    {this.state.photos.map((e, index) => (
                        <View key={index} style={styles.card}>
                            <Image style={{height: '85%', width: '100%'}} source={{uri: e.thumbnailUrl}} />
                            {/* <Text style={{color: 'black', height: '15%'}}>{e.id}</Text> */}
                            <Text style={{color: 'black', height: '15%'}}>{e.id}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
         );
    }
}

const styles = StyleSheet.create({
    backgrd1: {
        flex: 1,
        backgroundColor: '#455a64',
    },
    card: {
        width: '47%',
        height: 150,
        margin: '1.5%',
        opacity: 0.6,
        alignItems: "center",
        backgroundColor: 'white',
    }
});
 
export default AlbumTiga;