import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import page1 from './pages/welcome 1'
import page2 from './pages/welcome 2'
import page3 from './pages/welcome 3'
import Login from './pages/login';
import Cadastro from './pages/register';
import Routes from "./route";
import Scanner from './pages/scanner'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='page 1'
          component={page1}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='page 2'
          component={page2}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='page 3'
          component={page3}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='login'
          component={Login}
          options={{headerShown: false,}}
        />

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{headerShown: false,}}
        />
        
        <Stack.Screen
          name='Routes'
          component={Routes}
          options={{headerShown: false,}}
        />     
        <Stack.Screen
          name='Scanner'
          component={Scanner}
          options={{headerShown: false,}}
        />

      </Stack.Navigator>  
    </NavigationContainer>
  );
}