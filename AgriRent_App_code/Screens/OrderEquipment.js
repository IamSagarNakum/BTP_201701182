/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Aurni from '../components/Equipments/Aurni';
import Fuvara from '../components/Equipments/Fuvara';
import Machine from '../components/Equipments/Machine';
import Motar from '../components/Equipments/Motar';
import Panp from '../components/Equipments/Panp';
import Pipe from '../components/Equipments/Pipe';
import Small from '../components/Equipments/Small';

export default function Equipment()  {
   <Text>ખેતીના ઓજાર ભાડે લ્યો </Text>;
   <Fuvara>Icon=[Fuv.png] ફુવારા ભાડે લ્યો </Fuvara>;
   <Pipe>Icon=[Pip.png] પાઇપ ભાડે લ્યો </Pipe>;
   <Machine>Icon =[Mcn.png] સિંચાઈ મશીન ભાડે લ્યો </Machine>;
   <Motar>Icon=[Mtr.png] ઇલેક્ટ્રિક મોટર ભાડે લ્યો </Motar>;
   <Panp>Icon=[Pnp.png]પંપ ભાડે લ્યો </Panp>;
   <Aurni>Icon=[Arn.png]ઓરણી  ભાડે લ્યો  </Aurni>;  
   <Small>Icon=[Sml.png]નાના ઓજારો ભાડે લ્યો </Small>;
}