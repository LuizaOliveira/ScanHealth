import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Button from '../../components/Button';
import Circle from '../../components/circle';

export default function page2({navigation}) {
    return(
        <View style={styles.container} >

            <Image style={styles.img}
                source={require('../../assets/2.png')}
            />

            <Text style={styles.text1}>
                coma  sem medo        
            </Text>

            <Text style={styles.text2}  textAlignments='left'>
                check o que contém alimentos  e evite de produtos que não pertencem a sua dieta        

            </Text>

            
            <Button 
                style={{backgroundColor:"#FFAD61", borderColor:"#FFAD61", borderRadius:40, color:"#fff"}}
                labelButton="próximo"
                onPress={() => {
                    navigation.navigate('page 3')
                }}
            />


            <View style={styles.Ellipse}>
                <Circle style={styles.circle}/>
                <Circle style={styles.circle}/>
                <Circle style={styles.circle}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        minHeight: 800,

    },
    img: {
        width:398,
        height:283,
        marginTop: 104,
    },   
        text1: {
        marginTop:10,
        fontWeight: "bold",
        fontSize:20,
        lineHeight: 20,
        
    },
    text2: {
        marginTop:10,
        marginLeft:25,
        marginRight:25,
        marginBottom:80,
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 20,
    },
    Ellipse: {
        flexDirection: "row",
    },


});