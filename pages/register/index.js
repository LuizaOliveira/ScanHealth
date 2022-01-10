import React, { useState, useEffect } from "react";
import { Image, View, Text,StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import axios from 'axios'
import Button from '../../components/Button';
import Input from '../../components/input';
import md5 from 'md5';



export default function Cadastro({navigation}) {

    
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [userName, setuserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [cPassword, setcPassword] = useState(null)
    const [hash, sethash] = useState(1)
    const [hashed, setHashed] = useState(null)
    const [user, setUsers] = useState(null)
    
    const hashIt = () => {
        setHashed(md5(password))
        
    };

    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUsers(result.data);
        })
    }, [])
    
    const singIn = () => {
        if(name, userName, email, password, cPassword != null) {
            if(user != null) {
                for(let i = 0; i < user.length; i++) {
                    if (user[i].email != email.value) {
                        console.log(password, cPassword)
                        if(password.value === cPassword.value) {
                            axios.post('https://61d458748df81200178a8c45.mockapi.io/api/user',{ 
                                "name": name.value,
                                "userName": userName.value,
                                "email": email.value,
                                "password": md5(password.value)
                            }).then(res => {
                                navigation.navigate('login', {frufru: "usúario cadastrado com sucesso"})
                            })
                            break
                        }else {
                            alert("senha errada")
                        }
                        
                    }else {
                        alert('usuário ja cadastrado')
                        break
                    }     
                }

            }else {
                if(password.value === cPassword.value) {
                    axios.post('https://61d458748df81200178a8c45.mockapi.io/api/user',{ 
                        "name": name.value,
                        "userName": userName.value,
                        "email": email.value,
                        "password": md5(password.value)
                    }).then(res => {
                        console.log('cadastro realizado com sucesso')  
                    })
                }else {
                    alert("senha errada")
                } 
            }
        }else{
            alert("preecha todos os campos")
        }
    }

    return(
        <View style={styles.container}>
            <Image style={{justifyContent:"center", alignItems: "center" }}
                source={require('../../assets/logo.png')}
                onProgress={()=> {
                    
                }}
            />
            <KeyboardAvoidingView 
                style={{}}
                behavior={Platform.OS == 'ios' ? 'padding' : "height"} 
                keyboardVerticalOffset={20}
            >
                <ScrollView style={{width: '100%'}}>
                    <View>
                        <Text style={styles.text}>Cadastre-se </Text>
                        <Input 
                            labelInput='Nome completo'
                            security={false}
                            onChangeText={(value) => setName({value})}                        
                        />
                        <Input 
                            labelInput='email'
                            security={false}
                            onChangeText={(value) => setEmail({value})}
                        />

                        <Input 
                            labelInput='nome de usuário'
                            security={false}
                            onChangeText={(value) => setuserName({value})}
                        />

                        <View style={styles.inputPassword}>
                            <Input 
                                labelInput='senha'
                                security={true}
                                onChangeText={(value) => setPassword({value})}
                            />

                            <Input 
                                labelInput='confirmar senha'
                                security={true}
                                onChangeText={(value) => setcPassword({value})}
                            />
                        </View>



                        <Text style={styles.password}>Já sou cadastrado</Text>

                        <Button
                            labelButton='Finalizar'
                            style={{backgroundColor:"#FFAD61", borderColor:"#FFAD61", borderRadius:40, color:"#fff"}}
                            onPress= {() => singIn()}
                        />

                    </View>
                </ScrollView>




            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:100,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
    },
    text: {
        marginTop:46,
        marginLeft:25,
        marginBottom:40,
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
    inputPassword: {
        flexDirection: 'row'
    }


});