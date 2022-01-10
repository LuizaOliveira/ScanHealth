import React, { useState, useEffect } from "react";
import { Image, View, TextInput, Text, StyleSheet,  } from "react-native";

import axios from 'axios'
import Button from '../../components/Button';
import Input from '../../components/input';
import md5 from 'md5';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { StatusBar } from "expo-status-bar";



export default function Login({navigation, route}) {
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [user, setUser] = useState([ ])
    const [logado, setLogado] = useState(false)
    const [newRegister, setNewRegister] = useState()

    
    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUser(result.data);
        })
    }, [])
    
    function useLogado () {
        setLogado(true)
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setNewRegister(route.params.frufru)
    //     }, 5000);
    // }, [])

    useEffect(() => {
        setTimeout(() => {
            setNewRegister(" ")
        }, 2000);
        setNewRegister(route.params?.frufru)
    }, [])


    const logIn = () => {
        if(email, senha != null) {
            if(user!= null) {
                for(let i = 0; i < user.length; i++) {
                    if (user[i].email === email.value && md5(senha.value) == user[i].password) {
                        setLogado(true);
                        navigation.navigate('Routes', { paramKey: email,})    
                        break;
                   }else{
                       alert('email ou senha inválidos')
                   }
                }
            }
        }else {
            alert('preencha todos os campos')
            
        }
    }

    return(
        <View style={styles.container} >
            {/* <View style={{position:"absolute", top:5, backgroundColor:"#2EB566", borderRadius:10, width:"120%"}}> */}
            {/* {newRegister == " "? null :  */}
                {route.params?.frufru  && newRegister != " " ? 
                    <Text style={{position:"absolute", top:5, backgroundColor:"#41DC3D", borderRadius:10, width:"120%", color:"#fff", padding:10, paddingLeft:12, margin:0, fontWeight:"bold"}}>{newRegister}</Text>
                    : null
                }
            {/* } */}
            {/* </View> */}
            {/* <TextInput placeholder="digite" onChange={(value) => setEmail(value)}>{email}</TextInput>
            <Button title="oioi" onPress={() => {
                // salvar()
            }}/> */}
            <Image style={styles.img}
                source={require('../../assets/logo.png')}
                onPress={() => {
                    navigation.navigate('page 3')
                }}
            />

            <View>
                <Text style={styles.text}>Login</Text>
                <Input 
                    labelInput='Email ou nome de usuário'
                    security={false}
                    onChangeText={(value) => setEmail({value})}

                />
                <Input 
                    labelInput='senha'
                    security={true}
                    onChangeText={(value) => setSenha({value})}

                />

                <Text style={styles.password}>Esqueceu a senha?</Text>

                <Button
                    style={{backgroundColor:"#FFAD61", borderColor:"#FFAD61", borderRadius:40, color:"#fff"}}
                    labelButton='Entrar'
                    onPress= {() => logIn()}


                /> 
            </View>
            <StatusBar hidden={true} />





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 100,
        paddingBottom:200,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        
    },
    text: {
        marginTop:76,
        marginLeft:25,
        marginBottom:50,
    },
    input: {
        marginLeft:26,
        marginRight:25,
        marginBottom:82,
        maxWidth:360,
        borderColor:'#fff',
        borderBottomColor: '#ccc',
        borderWidth: 1,

    },
    password: {
        color: "#50919A",
        textAlign: 'center',
        textDecorationLine: 'underline',

    },


});