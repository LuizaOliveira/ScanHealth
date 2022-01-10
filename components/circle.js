import React, { Component } from 'react'
import { Dimensions, TouchableHighlight, StyleSheet, Text, Image } from 'react-native';

export default class Circle extends Component {
    render() {
        return (
            <TouchableHighlight  
            
                style={[styles.circle, this.props.style]}
                underlayColor = '#ccc'
                onPress = { () => alert('Yaay!') }
                >
                <Image style={styles.img}
                    source={this.props.img}
                />         
                {/* <Text> </Text> */}
          </TouchableHighlight>
      
        )

    }
}

const styles = StyleSheet.create({
    
    circle : {
        
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor:'#C4C4C4',
        justifyContent: 'center',
        alignItems: 'center',
        height : 10 ,
        width :10,
        borderRadius: 1000,
        marginLeft: 8,
        marginTop: 40,
        marginBottom: 30,

    },
    img: {
        maxHeight:100,
        maxWidth:100,
        borderRadius: 1000,
    },
    


});



