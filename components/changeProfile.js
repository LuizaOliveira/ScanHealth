import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput} from "react-native";

import Button from "./Button";
import axios from 'axios'


export default function ChangeProfile({userEmail}) {
    const [name, setName] = useState(null)
    const [userName, setuserName] = useState(null)
    const [email, setEmail] = useState(userEmail)
    const [userId, setUserId] =useState()
    const [user, setUser] = useState([ ])


    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUser(result.data);
        })
    }, [])
    
    useEffect(() => {
        if(user!= null) {
            for(let i = 0; i < user.length; i++) {
                if (user[i].email == email) {
                    console.log('entou')
                    setName(user[i].name),
                    setuserName(user[i].userName)
                    setUserId(user[i].id)
                    break;
                    // console.log(user[i].email)
                }else{

                }
            }   
        }
    }, [user])
    function put () {
        axios.put(`https://61d458748df81200178a8c45.mockapi.io/api/user/${userId}`, { 
            "name": name,
            "userName":userName,
            "email": email,
        })
    }



    return(
        <View style={{backgroundColor:"#FFFDFB", minHeight:700}}>
            
            <View>
                <View style={{justifyContent:'center'}}>
                    <Text style={styles.text }>Nome de usuário</Text>
                    <TextInput onChangeText={(value) => setuserName(value)}style={styles.input}>{userName}</TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput onChangeText={(value) => setName(value)}style={styles.input}>{name}</TextInput>
                </View>

                <View>
                    <Text style={styles.text}>Email</Text>
                    <TextInput onChangeText={(value) => setEmail(value)} style={styles.input}
                    >
                       {email}
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.submit} onPress= {() => put()}
>
                    <Text style={[styles.text, styles.submitText]}>Salvar</Text>
                </TouchableOpacity>
        
                </View>
            {/* <Routes/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignContent:"center",
        alignItems: "center",
    },
    cardHeader: {
        marginTop:20,
        width: "100%",
        height: 100,
        backgroundColor: "#15141470",
        marginBottom:80,
    },
    circleImage: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        justifyContent:"center",
        alignItems: "center"
    },
    input:{
        paddingBottom:11,
        borderColor:"#fff",
        borderBottomColor:"#80808090",
        borderWidth: 0.5,
        maxWidth: 400,
        marginLeft:11,
        marginRight: 5,
        color:"#80808090"
    },
    text:{
        paddingBottom:10,
        paddingTop:10,
        marginLeft:11,
        color:"#05050599"


    },
    submit:{
        position:"absolute",
        marginRight:40,
        marginLeft:40,
        marginTop:"100%",
        
    },
    submitText:{
        fontWeight: "bold",
        borderWidth: 1,
        minWidth:300,
        height:50,
        paddingTop:15,
        textAlign:'center',
        backgroundColor:"#FFAD61", 
        borderColor:"#FFAD61", 
        borderRadius:40, 
        color:"#fff"
        // borderColor: "#FFAD61",
    }
    

})
