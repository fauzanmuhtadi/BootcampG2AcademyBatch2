import React, { Component } from 'react';
import { Login, Home, Setting } from './components/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';


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
  isLogin: state.auth.isLoggedIn
})
 
export default connect(mapStateToProps, null)(IndexApp);