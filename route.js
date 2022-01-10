import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/home';
import List from './pages/list';
import Scan from './pages/scan';
import Profile from './pages/profile';

import { Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import {  Feather, SimpleLineIcons} from '@expo/vector-icons'
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();
export default function Routes({route}) {   
    const [fontsLoaded] = useFonts ({
        Poppins_400Regular,
        Poppins_600SemiBold,
    })
    if(!fontsLoaded) {
        return null
    }
    return(
        <Tab.Navigator
            
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#FFFCFA',
                    height: 60,
                    borderRadius: 16,
                },
            }}
        >
            <Tab.Screen 
                style={{fontSize:20}}
                name='Home'
                component={Home}
                initialParams={{ user: route.params }}
                options={{
                    tabBarLabel: ({focused}) => (
                        focused ? <Text style={{fontSize: 18,marginBottom:13, color:"#FFAD61", fontFamily:'Poppins_600SemiBold'}}> Início</Text> : null
                    ),
                    tabBarIcon: ({focused}) => (
                        !focused ? <Feather name='home' size={25} color={'#808080'} /> : null
                        
                    )                    
                }}
            />

            <Tab.Screen 
                name='List'
                component={List}
                options={{
                    // tabBarLabel: 'Busca',
                    tabBarLabel: ({focused}) => (
                        focused ? <Text style={{fontSize: 18,marginBottom:13, color:"#A3DBA5", fontFamily:'Poppins_600SemiBold'}}>Lista</Text> : null
                    ),
                    tabBarIcon: ({focused}) => (
                        !focused ? <SimpleLineIcons name="list" size={24} color="#808080" />: null 
                    )
                }}
            />

            <Tab.Screen 
                name='Scan'
                component={Scan}
                initialParams={{ NomeUsuario: route.params }}
                options={{
                    tabBarLabel: ({focused}) => (
                        focused ? <Text style={{fontSize: 18,marginBottom:13, color:"#C5B2ED", fontFamily:'Poppins_600SemiBold'}}> Analisar</Text> : null
                    ),
                    tabBarIcon: ({focused}) => (
                        !focused ? <Feather name='camera' size={25} color={'#808080'} /> : null
                    )
                }}
            />

            <Tab.Screen 
                
                name='Profile'
                component={Profile}
                initialParams={{ username: route.params }}
                options={{
                    headerShown: true,
                    tabBarLabel: ({focused}) => (
                        focused ? <Text style={{fontSize: 18,marginBottom:13, color:"#71DAD4", fontFamily:'Poppins_600SemiBold'}}> Perfil</Text> : null
                    ),
                    tabBarIcon: ({focused}) => (
                        !focused ? <Feather name='user' size={25} color={'#808080'} /> : null
                    )
                }}
            />
        </Tab.Navigator>
    )
}