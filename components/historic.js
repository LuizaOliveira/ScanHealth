import React,{useState,useEffect} from "react";
import { Image, View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView,  } from "react-native";
import axios from 'axios'

import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import InputSearch from "./inputSearch";

export default function Historic({userEmail}) {
    
    // const userLogado = route.params.user
    const [escaneados, setEscaneados] = useState([ ])
    const [users, setUsers] = useState([ ])
    const [name, setName] = useState(null)
    const [userName, setuserName] = useState(null)
    const [list, setList] = useState([])
    const [email, setEmail] = useState(userEmail)
    const [userId, setUserId] =useState(1)


    useEffect(() => {
        axios.get(`https://61d458748df81200178a8c45.mockapi.io/api/user/${userId}/historic`).then (result => {
            setList(result.data);
            console.log('atualizou')
            sla()
            console.log('acucar')
        })
    }, [])
    
    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUsers(result.data);
        })
    }, [])


    // console.log(userId)
    // //   console.log(escaneados)

    useEffect(() => {
        // console.log(escaneados)
        // for(const i=0; i < escaneados.length; i++){
        //     console.log(escaneados.length)
        //     if(escaneados) {
        //         console.log(escaneados[i])
        //     }
        // }
    }, [escaneados])
    const sla = () => {
        if(users!= null) {
          for(let i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                setUserId(users[i].id)
                setEscaneados(users[i].historic)
                break
            }else{
                // alert('wait')
            }
          }   
        }

    }
    
    useEffect(() => {
        if(users!= null) {
          for(let i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                setUserId(users[i].id)
                setEscaneados(users[i].historic)
                break
            }else{
                // alert('wait')
            }
          }   
        }
      }, [users])


    function List ({name,}) {
    
        return(
            <View >
                {/* <View style={{flexDirection:"row",  paddingTop:20, paddingLeft:19,}}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{color:"#585151", fontSize:13, paddingBottom:5, paddingTop:5, fontWeight:"bold"}}> {name}</Text>
                </View> */}
    
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"row", margin:20,}}>
                            {/* <Text style={{fontSize:12, color:"#6D6C67", paddingLeft:5, paddingTop:0,}}>Descrição</Text> */}
                        <MaterialIcons name="history" size={24} color="black" />
                        <Text style={{textAlign:'justify', fontSize:12, padding:10, marginRight:5,}}>{name}</Text>
                    </View>
                    
                </View>

            </View>

        )}
    return(
        <View style={styles.container}>
            <SafeAreaView style={{flex:1, borderWidth:1,  borderTopLeftRadius:50, borderTopRightRadius:50, borderTopColor:"#cccccc", width:'100%', borderColor:"#fff", backgroundColor:"#fff", }}>
                {escaneados == null ?    
                    <View>
                        <Text style={styles.textNotFound}>Opss! nada por aqui :(  </Text>
                        <Text style={styles.textNotFound2}> você ainda não escaneou nenhum produto recentimente </Text>
                    </View>
                : 
                    <FlatList
                    data={escaneados}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <List tamanho={item} name={item.name} />}
                    />
                }  
            
            </SafeAreaView>

            <StatusBar hidden={true} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 800,
        backgroundColor: '#FFFDFB',

    },
    header: {
        maxHeight: 200,
        width:420,
        backgroundColor:"#FFF3E8",
    },
    text: {
        color: "#585151",
        marginLeft: 17,
        // fontFamily: 
    },
    img: {
        marginTop:30,
        height:100,
        width: 100,
        resizeMode:"contain" ,
        // elevation:12,
    },
    h3:{
        fontWeight: "bold", 
        color: "#585151",
        marginLeft: 17,
        fontSize:18, 
        paddingTop:20, 
        paddingBottom:10, 
        paddingLeft:5
    },
    textNotFound: {
      marginTop:'40%',
      marginLeft:"25%",
      fontSize:18,
      // marginRight:"40%",
    },
    textNotFound2: {
      marginLeft:"5%",
      marginRight:'5%',
      textAlign:'center'
      // marginRight:"40%",
    }


});