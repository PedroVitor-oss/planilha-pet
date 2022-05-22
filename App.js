import React,{useState}  from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import inicio from './src/pages/inicio'
import historico from './src/pages/historico'

const drawer = createDrawerNavigator();
export default function App() {
  return (
   <NavigationContainer>
     <drawer.Navigator>
       <drawer.Screen name="inicio" component={inicio}></drawer.Screen>
       <drawer.Screen name="historico" component={historico}></drawer.Screen>
     </drawer.Navigator>
   </NavigationContainer>
  );
}


