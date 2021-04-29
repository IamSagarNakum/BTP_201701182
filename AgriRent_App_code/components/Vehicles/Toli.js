/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import * as React from 'react';

import {Textinput,FlatList,Text,StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Date} from '../src/utils/Date';
import {Button} from '../src/utils/Button';
import {Location} from '../src/utils/Location';
import {Time} from '../src/utils/Time';



const ભાડુત1 = "nakumsagar001@gmauil.com";
const ભાડુત2 = "nakumsagar416@gmauil.com";
const renter = [ ભાડુત1,ભાડુત2];

export default function Labours() {
   <Text style={styles.Header} >ટોલી  ભાડે કયો   </Text>;

   <Text>નીચેના ખાનામાં વિગતો ભરો અને ઓર્ડર બટન દબાવો ટોલી ભાડે લેવા માટે </Text>;
   <Textinput>તમારું નામ</Textinput>;
   <Textinput>તમારું Email</Textinput>;
   <Textinput>તમારો મોબાઈલ નંબર</Textinput>;
   <Textinput>તમારું સરનામું </Textinput>;
   <Date>તારીખ પસંદ કરો</Date>;
   <Time>સમય પસંદ કરો </Time>;
   <FlatList>ભાડુત પસંદ કરો  {renter} </FlatList>;
   <Textinput>અંદાજે કેટલા દિવસ જરૂરી છે ?</Textinput>;
   <Location></Location>;
   <Button>ઓર્ડર કરો </Button>;
}

const styles = StyleSheet.create({
   Header : {
       color : "black",
       alignSelf : "center",
       alignItems : "center",
       justifyContent : 'center'
   }
})