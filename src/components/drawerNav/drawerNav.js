import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Giro, Home, Informasi, Login, Paket, Prabayar, Tabungan } from '../../screens';
import { Text, TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Nav(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator style={{position: 'relative'}}>
        <Drawer.Screen name="Home">
          {() => <Home dataId={props.iniId} />}
        </Drawer.Screen>
        <Drawer.Screen name="Informasi">
          {() => <Informasi dataId={props.iniId} />}
        </Drawer.Screen>
        <Drawer.Screen name="Tabungan">
          {() => <Tabungan dataId={props.iniId} />}
        </Drawer.Screen>
        <Drawer.Screen name="Giro">
          {() => <Giro dataId={props.iniId} />}
        </Drawer.Screen>
        <Drawer.Screen name="Voucher Prabayar">
          {() => <Prabayar dataId={props.iniId} />}
        </Drawer.Screen>
        <Drawer.Screen name="Paket Data">
          {() => <Paket dataId={props.iniId} />}
        </Drawer.Screen>
      </Drawer.Navigator>
      <TouchableOpacity onPress={props.keluarOm} style={{position: 'absolute', top: 13, right: 20, backgroundColor: 'red', padding: 5, borderRadius: 5}}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
}