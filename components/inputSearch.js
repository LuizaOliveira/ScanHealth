import React from 'react'
import { StyleSheet, TextInput, View, Text} from 'react-native';

import {  Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';




const InputSearch = ({labelInput, security}) => {
    return (
        <View style={styles.container}>
            {/* <Feather style={styles.icon} name='search' size={25} color={'#808080'} /> */}
            {/* <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <Text>
                    Elevation 0
                </Text>
            
            </CardView> */}
            <TextInput
                // label={typeInput}
                placeholder={labelInput} 
                placeholderTextColor={'#ccc'}  
                leftIcon={{ type: 'font-awesome', name: 'search' }}
                style={styles.input}
            />



        </View>
        
    )
}

export default InputSearch

const styles = StyleSheet.create({

    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        flex: 1,
        marginLeft:60,
        marginBottom:20,
        padding: 5,
        paddingLeft:15,
        minWidth:330,
        backgroundColor:"#fff",
        borderRadius:40,
        elevation:5,

    },
    icon: {
        padding: 15,

    },

})