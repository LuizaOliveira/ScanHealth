import React,{useState,useEffect} from "react";
import { Image, View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView,  } from "react-native";
import axios from 'axios'

import { Entypo } from '@expo/vector-icons';
import InputSearch from "../../components/inputSearch";

export default function Home({route}) {

    const userLogado = route.params.user
    const [escaneados, setEscaneados] = useState([ ])
    const [users, setUsers] = useState([ ])
    const [list, setList] = useState([])
    const [email, setEmail] = useState(userLogado.paramKey.value)
    const [userId, setUserId] =useState(1)


    useEffect(() => {
        axios.get(`https://61d458748df81200178a8c45.mockapi.io/api/user/${userId}/historic`).then (result => {
            setList(result.data);
            console.log('atualizou')
            sla()
        })
    }, [])
    
    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUsers(result.data);
        })
    }, [])
    const sla = () => {
        if(users!= null) {
          for(let i = 0; i < users.length; i++) {
            if (users[i].email == email) {
                setUserId(users[i].id)
                setEscaneados(users[i].historic)
                break
            }else{
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
            }
          }   
        }
      }, [users])


    function List ({name, id, acucar, origemAnimal, lactose,}) {
    
        return(
            <View >
                <View style={{flexDirection:"row",  paddingTop:20, paddingLeft:19,}}>
                    <Entypo name="dot-single" size={24} color="black" />
                    <Text style={{color:"#585151", fontSize:13, paddingBottom:5, paddingTop:5, fontWeight:"bold", marginRight:10}}> {name}</Text>
                </View>
    
                <View style={{flexDirection:"row"}}>
                    <View style={{width:'80%', marginLeft:35, backgroundColor:"#FDFDFD", borderRadius:10,}}>
                        <Text style={{fontSize:12, color:"#6D6C67", paddingLeft:5, paddingTop:0,}}>Descrição</Text>
                        <Text style={{textAlign:'justify', fontSize:12, padding:5}}>o seguinte produto, {name} {acucar}  açucar, {lactose} lactose e {origemAnimal}  produtos de origem animal</Text>
                    </View>
                    
                </View>

            </View>

        )}
    return(
        <View
         style={styles.container}>
            <View style={styles.header}>
                <Text style={[{fontWeight: "bold", fontSize:22,marginTop: 40,}, styles.text]} >
                    Olá User, seja bem vindo!
                </Text>

                <Text style={[{fontSize:12, paddingTop:5, }, styles.text]} > 
                    Scanei seus alimentos favoritos e aproveite                
                </Text>
                <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center", margin:10}}>
                    <InputSearch labelInput='Pesquisa rápida por nome ou marca'/>
                    <Image style={[{padding:0}, styles.img]} source={require('../../assets/searchImage.png')}/>    
                </View>
            </View>

            <Text style={styles.h3}>Alimentos escaneados Recentimente:</Text>   
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
                    renderItem={({ item }) => <List tamanho={item} name={item.name} id={item.id} acucar={item.acucar} origemAnimal={item.origemAnimal} lactose={item.lactose} />}
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
    },
    img: {
        marginTop:30,
        height:100,
        width: 100,
        resizeMode:"contain" ,
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
    },
    textNotFound2: {
      marginLeft:"5%",
      marginRight:'5%',
      textAlign:'center'
    }


});