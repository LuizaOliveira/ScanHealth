import React, {useState} from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground,SafeAreaView, TextInput, Modal, TouchableOpacity} from "react-native";

import ButtonScan from "../../components/button-scan";
import Pic from "../../components/pic";
import Scanner from "../../components/scanner"
import ModalInfo from "../../components/modal-Info"



export default function Scan({navigation, route}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalInfo, setModalInfo] = useState(false)
    const [Visible, setVisible] = useState(false)
    const log = route.params.NomeUsuario
    const [inputGtin, setInputGtin] = useState("")
    console.log(inputGtin)





    return(
        <View style={styles.container}>
            <Modal visible={modalInfo}
                animationType='fade'
                propagateSwipe={true}
                onRequestClose= {() => close(false)}> 

                <ModalInfo data={inputGtin}/>  
                
            </Modal>

            <Modal visible={modalVisible}                        
                animationType='slide'
                transparent={true}
                onRequestClose= {() => setModalVisible(false)}>
                <View style={styles.modal}>
                    <Scanner/>
                </View>

            </Modal>

            <View>
                <View style={styles.header}>
                    <SafeAreaView style={{ alignItems: "center", justifyContent: "center", }}>

                        <ImageBackground style={[{}, styles.header]} source={require('../../assets/scan-image.png')}>
                            <View style={styles.card}>
                                <Text style={styles.textCard}>Analisar Ingredientes dos Alimentos</Text>
                            </View>
                        </ImageBackground>
                            

                    </SafeAreaView>

                </View>

                <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center",}}>
                    <ButtonScan
                        labelButton="Analise de fotos"
                        style={{backgroundColor:"#836DE8", borderColor: '#836DE8', color:'#fff',}}
                        onPress={ () => {
                            setVisible(!true)
                        }}                       
                    />
                    <ButtonScan
                        labelButton="Digitar código "
                        style={{backgroundColor:"#fff", borderColor: '#836DE8', color:'#836DE8',}}                        
                        onPress={ () => {
                            setVisible(true)                        
                        }}

                    />
                </View>

                <View style={{ alignItems: "center", justifyContent: "center", }}>
                            
                    {!Visible ?
                        <Pic 
                            onPress={() => 
                                navigation.navigate('Scanner', {userlog: log.paramKey.value})
                            }
                            labelButton='tire uma foto'
                            labelButton2='do rotulo do produto desejado'

                        /> 
                        : <View style={styles.cardButton}>     
                            <Text style={{
                                paddingLeft:15,
                                color: "#5A5656",
                                fontSize:18,
                                fontWeight:"bold",
                                marginRight:15,
                                bottom:8,

                            }}>
                                Insira o código de barras 
                            </Text>

                            <TextInput 
                                placeholder='Código de barras' 
                                placeholderTextColor={'#ccc'}  
                                style={[styles.input, ]}
                                onChangeText={(value) => setInputGtin({value})}

                            />
                            <TouchableOpacity onPress={() => {setModalInfo(true)}}>
                                <Text style={{color:'#836DE8', padding:10, left:'65%', top:10}} >Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                           
                    }
                    
                </View>
            </View>
        
        <StatusBar hidden={true} />
        </View>   
   


    )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9F6FA',

    },
    header: {
        height: 340,
        width:420,
    },
    text: {
        color: "#585151",
        marginLeft: 17,
    },
    img: {
        width: '100%',
        height: 200,
        // resizeMode:"contain" ,
    },
    card: {
        position: 'absolute',
        backgroundColor: "#ffffff90",
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:360,
        height:110,
        top: 270,
        left: 46,
        right: 46,
        borderRadius:10,

    },
    textCard: {
        fontSize:22,
        fontWeight: 'bold',
        color: "#9176ed",
    },
    elevation: {
        elevation: 1,
        shadowColor: '#000000',
    },
    cardButton:{
        backgroundColor: "#fff",
        justifyContent: 'center',
        // alignItems: 'center',
        minWidth:300,
        minHeight:140 ,
        marginTop: 70,
        borderRadius:15,
    },
    input: {
        marginTop:7,
        marginRight:15,
        marginLeft:15,
        maxWidth:360,
        minWidth:240,
        borderColor:'#fff',
        borderBottomColor: '#ccc',
        borderWidth: 1,
    },
    modal: {}


});