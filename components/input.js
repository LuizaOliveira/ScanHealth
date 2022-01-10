import React from 'react'
import { StyleSheet, TextInput} from 'react-native'


const Input = ({labelInput, security, onChangeText}) => {
    return (
        <TextInput
            // label={typeInput}
            placeholder={labelInput} 
            placeholderTextColor={'#ccc'}  
            style={styles.input}
            secureTextEntry={security}
            onChangeText={onChangeText} 
            
        />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        marginLeft:26,
        marginRight:25,
        marginBottom:70,
        maxWidth:360,
        minWidth:150,
        borderColor:'#fff',
        borderBottomColor: '#ccc',
        borderWidth: 1,

    },
})