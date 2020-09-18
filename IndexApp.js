import React, { Component } from 'react';
import { Login, Home, Setting } from './components/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { setData } from './components/actions'


const Stack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name="Home"
        component={Home}
      />
      <HomeTab.Screen
        name="Setting"
        component={Setting}
      />
    </HomeTab.Navigator>
  );
}

class IndexApp extends Component {
  componentDidMount() {
    this.takePhotos()
    this.liat()
  }

  liat = () => {
    let apa = this.props.hehe
    console.log(apa);
  }

  takePhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos') //albumId 1-100, id 1-5000, title, url, thumbnailUrl
        .then(response => response.json())
        .then((json) => {
            let newPhotos = json
            newPhotos.splice(2, 4998)
            // await this.setState({
            //     photos: newPhotos
            // })
            this.props.saveData(newPhotos)
        })
        .catch(error => console.log('Parsing failed!', error))
  }

  render() { 
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {this.props.isLogin ? (
            <>
                <Stack.Screen name="Welcome" component={HomeTabScreen} />
            </>
            )
            : (
            <>
                <Stack.Screen name="Login" component={Login} />
            </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLoggedIn,
  hehe: state.data.nihData
})

const mapDispatchToProps = (dispatch) => ({
  saveData: (datas) => dispatch(setData(datas))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(IndexApp);