import React, { Component } from 'react'
import {  Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ButtonScan extends Component {
    render() {
        return (
            <TouchableOpacity       
                onPress={
                    this.props.onPress}
                style={styles.submit}
                underlayColor='#fff'>
                <Text style={[styles.submitText, this.props.style]}>
                    {[this.props.labelButton]}
                </Text>
            </TouchableOpacity>
    
            
        )
        
    }
}
// export default ButtonScan



const styles = StyleSheet.create({

    submit:{
        marginRight:15,
        marginTop: 60,
    },
    submitText:{
        paddingTop:12,
        fontSize: 16,
        fontWeight: "bold",
        width:180,
        height:50,
        textAlign:'center',
        borderWidth: 1,
        borderColor:"#836DE8",

    },
    purple: {
        color:"#fff",
        backgroundColor:"#836DE8",
    },
    outline: {
        color:"#836DE8",
        backgroundColor:"#fff",
    }
})