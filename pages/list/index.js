import React, {useState,useEffect} from "react";
import {  View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, TextInput, FlatList } from "react-native";

import { AntDesign, EvilIcons} from '@expo/vector-icons'
import axios from 'axios'

export default function List() {
    const [modalVisible, setmodalVisible] = useState(false);
    const [produto, setProduto]= useState(null)
    const [produtos, setProdutos]= useState([ ])
    const [visibleList, setVisibleList ] = useState(true)

    
    const adicionar = () => {
        axios.post('https://61d458748df81200178a8c45.mockapi.io/api/list',{ 
            "name": produto,           
        }) 
        
    }

    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/list').then (result => {
            setProdutos(result.data);
        })
    }, [])

    const add = () => {
        adicionar()
        setVisibleList(true)
        setmodalVisible(false)
    }
      
     useEffect(() => {
        List()
     }, [produtos]) 

     
    function List () {
        return(
            <FlatList               
                data={produtos}
                renderItem={({ item }) =>
                <View >
                    <View style={{ paddingTop:20, paddingLeft:19,}}>
                        {visibleList?
                            <View style={{flexDirection:'row', justifyContent:"space-between" }}>

                                <Text style={{color:"#808080", fontSize:15, paddingBottom:5, paddingTop:5, fontWeight:"bold"}}> {item.name.value}</Text>
                                <TouchableOpacity onPress={() => {setVisibleList(false)}}>
                                    <EvilIcons name="close" size={24} color="#808080" style={{margin:5, marginRight:20}} />
                                </TouchableOpacity>

                            </View> : null}
                        </View>                
                </View>
                }>

            </FlatList> 

        )
    }

      
    return(
        
        <View style={styles.container}>
            <Text style={{bottom:50, fontSize:20,}}>Lista de compras</Text>
            <TouchableOpacity onPress={() => setmodalVisible(true)} style={{flexDirection:"row", bottom:20}}>
                <AntDesign name="plussquareo" size={27} color="black" />
                <Text style={{paddingLeft:10, fontSize:18,}}>Adicionar</Text>
                
            </TouchableOpacity>

            <List/>
           
            <Modal
                visible={modalVisible}
                animationType='slide'
                propagateSwipe={true}
                transparent={true}
                onRequestClose= {() => setmodalVisible(false)}>
                
                <View style={{width:'70%', minHeight:150, backgroundColor:'#fff', left:'15%', top:'25%', borderRadius:15,}}>
                    <Text style={{top:15, paddingLeft:15, fontSize:15, fontWeight:"bold"}}>Adicionar produto</Text>
                    <TextInput 
                        style={{borderBottomColor:'#cccccc', 
                        color:'#cccccc', 
                        borderBottomWidth:1,  
                        marginTop:40, 
                        marginLeft:20, 
                        width:'85%' }}
                        placeholder='informe o nome do produto'
                        onChangeText={(value) => setProduto({value})}
                    />
                    <View style={{flexDirection:'row', top:20, left:'70%'}}>
                        <TouchableOpacity onPress={() => setmodalVisible(false)}>
                            <Text style={{padding:10}}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>  add()}>
                            <Text style={{color:'#836DE8', padding:8}} >Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </Modal>
                
        </View>
    )}
    
           

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingLeft: 16,
        paddingTop: 100,
        backgroundColor:'#FFFDFB'
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      paddingVertical: 15,
    },
    text: {
      lineHeight: 30,
      marginLeft: 10,
    },
    CheckBox: {
        width: 25,
        height: 25,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      WrapperCheckBox: {
        flexDirection: "row",
        alignItems: "center"
      },
      LabelCheck: {
        color: '#fff',
        marginLeft: 6
    }
    // }),
    
    
});


 