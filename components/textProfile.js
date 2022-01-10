import React, { Component, } from 'react'
import {  Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import {  FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons'
        
export default class TextProfile extends Component {

    render() {
        return (
            <View style={ [this.color,styles.Text, this.props.style,]}>
                <Text style={[{flexDirection:"row"}, styles.linePadding]}>
                    <View style={{marginRight:500}}></View >
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Text style={{marginLeft:10}}>{ this.props.labelText}</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        )
      
    } 
}

const styles = StyleSheet.create({

    linePadding:{
        margin:10,
    },
    Text:{
        borderBottomWidth:1,
        borderBottomColor:"#55555550",
        padding:12,
    },
    icon: {
        padding:30,
    }

})