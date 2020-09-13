import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
// import LinearGradient from 'react-native-linear-gradient'; // Only if no expo


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            search: '',
            photos: [],
            // idAlbum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    }

	albsatu() {
		Actions.albumsatu()
    }

    albdua() {
		Actions.albumdua()
    }

    albtiga() {
		Actions.albumtiga()
    }

    keluar() {
        Actions.login()
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
                newPhotos.splice(500, 4500)
                await this.setState({
                    photos: newPhotos
                })
                // console.log(this.state.photos);
            })
            .catch(error => console.log('Parsing failed!', error))
    }

	render() {
		return(
			<ScrollView style={styles.newContainer}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                <Button color='red' onPress={this.keluar} title="Logout" />
                <View>
                    {/* <Text>Home</Text> */}
                    <ListItem
                        Component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.95}
                    >
                        <Avatar rounded source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' }} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                            Album 1
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'black' }}>
                            First Album
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron onPress={this.albsatu} color="black" />
                    </ListItem>
                    <ListItem
                        Component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.95}
                    >
                        <Avatar rounded source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' }} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                            Album 2
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'black' }}>
                            Second Album
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron onPress={this.albdua} color="black" />
                    </ListItem>
                    <ListItem
                        Component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.95}
                    >
                        <Avatar rounded source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png' }} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                            Album 3
                            </ListItem.Title>
                            <ListItem.Subtitle style={{ color: 'black' }}>
                            Third Album
                            </ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron onPress={this.albtiga} color="black" />
                    </ListItem>
                </View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  newContainer: {
    backgroundColor:'#455a64',
    flex: 1,
  },
  inside: {
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  }
});

export default Home;