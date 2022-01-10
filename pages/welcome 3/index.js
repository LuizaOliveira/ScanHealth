import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Circle from '../../components/circle';
import Button from "../../components/Button";

export default function page3({navigation}) {
    return(
        <View style={styles.container} >
            <Image style={styles.img}
                source={require('../../assets/3.png')}
                onPress= {() => {
                    navigation.navigate('page 1')
                }}
            />

            <Text style={styles.text1}>
                Crie sua lista de compras
            </Text>

            <Text style={styles.text2}  textAlignments='left'>
                e facilite na hora das compras
            </Text>

            
            <Button 
                style={{backgroundColor:"#FFAD61", borderColor:"#FFAD61", borderRadius:40, color:"#fff"}}
                labelButton="Criar nova conta"
                onPress={() => {
                    navigation.navigate('Cadastro')
                }}
            />

            <Button 
                divStyle={{marginTop:10}}
                style={{backgroundColor:"#fff", borderColor:"#FFAD61", borderRadius:40, color:"#FFAD61" }}
                labelButton="já tenho uma conta"
                onPress={() => {
                    navigation.navigate('login')
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
        width:412,
        height:355,
        marginTop: 48,
        marginRight:1,
    },   
        text1: {
        marginTop:30,
        fontWeight: "bold",
        fontSize:20,
        lineHeight: 20,
        
    },
    text2: {
        marginTop:10,
        marginLeft:25,
        marginRight:25,
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 20,
        marginBottom:25,

    },
    Ellipse: {
        flexDirection: "row",
    },


});