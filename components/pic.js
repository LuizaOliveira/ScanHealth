import React from 'react'
import {  Text, StyleSheet, Image, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
const Pic = ({labelButton, labelButton2, onPress}) => {
    return (
        <TouchableOpacity
            accessible={true}
            onPress={onPress}
            style={styles.card}
            underlayColor='#fff'>
            <View style={{flexDirection: "row"}}>
                <View style={styles.cardIcon}>
                    <Image style={[{padding:0,height:50 ,resizeMode:'contain'},]} source={require('../assets/icon-scan.png')}/>
                    {/* <MaterialCommunityIcons name="image-filter-center-focus" size={60} color="#836DE8" />                 */}
                </View>
                <View style={{marginLeft:20, alignItems:"center", justifyContent:"center",}}>
                    <Text style={[{fontSize:20, fontWeight:"bold", paddingRight:20}]}>{labelButton}</Text>
                    <Text style={styles.Text}>{labelButton2}</Text>

                </View>

            </View>
        </TouchableOpacity>

        
    )
}

export default Pic

const styles = StyleSheet.create({

    submit:{
        marginRight:15,
        marginTop: 60,
    },
    card:{
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        minWidth:280,
        height:110,
        top: 70,
        borderRadius:15,
    },
    cardIcon:{
        width:80,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F5F8F6",
        marginLeft:0,
        borderRadius: 10,
    },
    Text:{
        fontSize:10, color:"#808080",
    }
})