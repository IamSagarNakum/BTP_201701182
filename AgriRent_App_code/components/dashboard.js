/* eslint-disable prettier/prettier */
// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button , Icon} from 'react-native';
import firebase from '../database/firebase';

import OrderVehicle from '../Screens/OrderVehicle';
import OrderEquipment from '../Screens/OrderEquipment';
import OrderLabours from '../Screens/OrderLabours';

import Profile from '../src/res/Profile';
import Clear  from '../src/res/Clear Cache';
import  files from '../src/res/My Files';
import Notification from '../src/res/Notifications';
import Logout from '../src/res/Logout';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  DrawerNavigate = () => {
    <View>
      <Notification></Notification>
      <Profile></Profile>
      <Clear></Clear>
      <files></files>
      <Logout></Logout>
    </View>
  }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
         <Icon onPress = {this.DrawerNavigate()}>icon=[Tridot.png]</Icon>
         <OrderVehicle>Icon=[Vehicle.png] ઓર્ડર ખેતીના સાધનો </OrderVehicle>
         <OrderEquipment>Icon=[Equip.png] ખેતીના ઓજાર ભાડે લ્યો </OrderEquipment>
         <OrderLabours>Icon=[Labr.png] મજદૂર ભાડે  લેવા માટે </OrderLabours>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});