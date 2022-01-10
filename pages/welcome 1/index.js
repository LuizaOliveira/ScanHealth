import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Button from '../../components/Button';
import Circle from '../../components/circle';


export default function page1({navigation}) {

    return(
        <View style={styles.container} >

            <Image style={styles.img}
                source={require('../../assets/1.png')}
            />
            <Text style={styles.text1}>
                Escanei seus produtos favoritos
            </Text> 

            <Text style={styles.text2}>
                Apontando a camera para o codigo de barras 
            </Text>
            
            <Text style={styles.text2}>
            </Text>

            <Button 
                style={{backgroundColor:"#FFAD61", borderColor:"#FFAD61", borderRadius:40, color:"#fff"}}
                labelButton="próximo"
                onPress={() => {
                    navigation.navigate('page 2')
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
        minHeight: 800,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",

    },
    img: {
        width:358,
        height:283,
        marginTop: 89,
        marginLeft:31,
        marginRight:31,
    },
    text1: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize:20,
        lineHeight: 20,
        
    },
    text2: {
        marginRight:50,
        marginTop:10,
        marginLeft:50,
        marginBottom:25,
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 20,
    },

    Ellipse: {
        flexDirection: "row",
    },

});