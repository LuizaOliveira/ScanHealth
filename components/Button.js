import React, { Component } from 'react'
import {  Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.submit, this.props.divStyle]}
                >
                <Text style={[styles.submitText, this.props.style]}>{this.props.labelButton}</Text>
            </TouchableOpacity>
        )
      
    }
}

// export default Button

const styles = StyleSheet.create({

    submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:30,
        
    },
    submitText:{
        fontWeight: "bold",
        borderWidth: 1,
        minWidth:300,
        height:50,
        paddingTop:15,
        textAlign:'center',
        // borderColor: "#FFAD61",
    }
})