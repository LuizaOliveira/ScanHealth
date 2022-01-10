import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'


const cosmos = require('bluesoft-cosmos-api');

export default function ModalInfo({data}) {
    console.log(data)

  
  cosmos.setToken('KbiVPWTe7calxddDzilGNw');
  const [modalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState([ ])
  const [userId, setUserId] =useState()
  const [scanned, setScanned] = useState(false);
  const [gtni, setGtni] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imageLactose, setImageLactose] = useState(null)
  const [imageSugar, setImageSugar] = useState(null)
  const [imageAnimal, setImageAnimal] = useState(null)
  const [textLactose, setTextLactose] = useState("")
  const [textSugar, setTextSugar] = useState("")
  const [textAnimal, setTextAnimal] = useState("")
  const [nameAcucar, setNameAcucar] = useState()
  const [nameLactose, setNameLactose] = useState()
  const [nameOrigemAnimal, setNameOrigemAnimal] = useState()
  const [inputGtin, setInputGtin] = useState(data.value)
  const [lactose, setLactose] = useState([ ])
  const [sugar, setSugar] = useState([ ])
  const [animal, setAnimal] = useState([ ])

  useEffect(() => {
    axios.get('https://61cf471765c32600170c7f1b.mockapi.io/lactose').then (result => {
      setLactose(result.data);
    })
  }, [])

  useEffect(() => {
    axios.get('https://61cf471765c32600170c7f1b.mockapi.io/Acucar').then (result => {
      setSugar(result.data);
    })
  }, [])

  useEffect(() => {
    axios.get('https://61cf471765c32600170c7f1b.mockapi.io/origemAnimal').then (result => {
      setAnimal(result.data);
    })
  }, [])

  useEffect(() => {
    handleBarCodeInput()
  }, [inputGtin])

  useEffect(() =>{
    haslactose();
    hasSugar()
    hasAnimal()
    // historic()              
  }, [description])


  useEffect(() => {
    axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
        setUser(result.data);
    })
}, [])

  useEffect(() => {
    // console.log('use efect')
    if(user!= null) {
      for(let i = 0; i < user.length; i++) {
        console.log(user[i].email)
        console.log( route.params.userlog)
        if (user[i].email == route.params.userlog) {
          console.log('entou')
          setUserId(user[i].id)
          console.log(userId)
          // console.log(u)
          axios.post(`https://61d458748df81200178a8c45.mockapi.io/api/user/${user[i].id}/historic`,{ 
            "name": name,
            "lactose": nameLactose,
            "acucar": nameAcucar,
            "origemAnimal": nameOrigemAnimal
          })          
          break         
        }else{
          alert('não foi salvo no historico')
        }
      }   
    }
  }, [nameOrigemAnimal])

       

      
    const  handleBarCodeInput = () => {
      setGtni(inputGtin.value)
      cosmos.gtins(inputGtin.value).then(res => {
      setName(res.data.description)
      setDescription(res.data.ncm.full_description)
    }).catch(err => {
      console.log('Error: ',err);
    });
  };

  const  haslactose = ()  => {
    for(let i = 0; i < lactose.length; i++) {
      if(description.indexOf != null) {
        if (description.toLowerCase().indexOf(lactose[i].name.toLowerCase()) != -1) {
          setImageLactose(require('../assets/grafico-vermelho.png'))
          setTextLactose('Contém')
          setNameLactose('contém')
          console.log(nameLactose)
         break;
       } else if (description.toLowerCase().indexOf(lactose[i].name.toLowerCase()) == -1 && name.toLowerCase().indexOf(lactose[i].name.toLowerCase()) != -1) {
           console.log('amarelo')
           setImageLactose(require('../assets/grafico-amarelo.png'))
           setTextLactose('Informações insuficientes')
           setNameAcucar('não há infomado em sua composição a presença de')
           break;
       } 
       else {
         setImageLactose(require('../assets/grafico-verde.png'))
         setTextLactose('Zero')
         setNameAcucar('não contém')

        //  console.log('verde')
        //  console.log(imageLactose)

       }
      }else {
        alert(description)
        // setCount(count+1)
        setScanned(false)
      }
    }
  }

  const hasSugar = () => {
    for(let i = 0; i < sugar.length; i++) {
       if ( description.toLowerCase().indexOf(sugar[i].name.toLowerCase()) != -1) {
        // console.log('vermelho')
        setImageSugar(require('../assets/grafico-vermelho.png'))
        setTextSugar('Contém')
        setNameAcucar('contém')

        break;
      } else if ( description.toLowerCase().indexOf(sugar[i].name.toLowerCase()) == -1 && name.toLowerCase().indexOf(sugar[i].name.toLowerCase()) != -1) {
          // console.log('amarelo')
          setImageSugar(require('../assets/grafico-amarelo.png'))
          setTextSugar('não há infomado em sua composição a presença de')
          setNameAcucar('não contém')
          break;
      } 
      else {  
        setImageSugar(require('../assets/grafico-verde.png'))
        setTextSugar('Zero')
        setNameAcucar('não contém')

        // console.log('verde')
      }
    }
  }

  const hasAnimal = () => {
    for(let i = 0; i < animal.length; i++) {
       if (description.toLowerCase().indexOf(animal[i].name.toLowerCase()) != -1) {
        // console.log('vermelho')
        setImageAnimal(require('../assets/grafico-vermelho.png'))
        setTextAnimal('Contém')
        setNameOrigemAnimal('contém')

        break;
      } else if (description.toLowerCase().indexOf(animal[i].name.toLowerCase()) == -1 && name.toLowerCase().indexOf(animal[i].name.toLowerCase()) != -1) {
          // console.log('amarelo')
          setImageAnimal(require('../assets/grafico-amarelo.png'))
          setTextAnimal('Informações insuficientes')
          setNameOrigemAnimal('não há infomado em sua composição a presença de')

          break;
      } 
      else {
        
        setImageAnimal(require('../assets/grafico-verde.png'))
        setTextAnimal('Zero')
        setNameOrigemAnimal('não contém')
      }
    }
  }

  return (
    <View style={{width:'100%', height:'100%'}}>
        <View style={styles.containerModal}>

            <View style={{flexDirection: 'row',}}>
              <TouchableOpacity onPress={() => close(false)} style={[styles.modalButton,{backgroundColor:'#cccccc'}]}>
                <Text  style={styles.ButtonTextModal}>Analisar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => haslactose()} style={[styles.modalButton,{backgroundColor:'#FFAD61'}]}>
                <Text style={styles.ButtonTextModal}>Resultado</Text>
            
              </TouchableOpacity>
            </View>

            <View style={styles.firstCard}>
              <Text style={{fontSize:14, color:'#000', textAlign:'center', paddingTop:8, }}>{name}</Text>
              <Text style={{fontSize:12, color:'#CCCCCC', textAlign:'center', paddingBottom:8}}>GTIN/EAN: {gtni}</Text>
            </View>

            <View style={styles.secondCard}>
              <View >
                <LinearGradient style={styles.header} colors={['#EDCDC3', '#DDC4D5', '#D1BEE2']}>

                <Text style={{fontWeight:'bold', color:'#fff', textAlign:"justify", top:'20%', paddingLeft:15, fontSize:20}}>Resultado da análise</Text>
                </LinearGradient>
              </View>
              <View  >
                <Text style={{fontWeight:"bold", color:"#B9B9B9", paddingLeft:10, paddingTop:10, fontSize:15}}>Lista de Ingredientes</Text>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.cardInfo}>
                    <Text style={styles.textCardInfo}>Lactose</Text>
                    <Image source={imageLactose} style={styles.imgCardinfoAL}/>
                    <Text style={{left:'40%', bottom:10, fontWeight: 'bold'}}>{textLactose}</Text>
                  </View>
                  

                  <View style={[styles.cardInfo, {left:5}]}>
                    <Text style={styles.textCardInfo}>Açucar</Text>
                    <Image source={imageSugar} style={styles.imgCardinfoAL}/>
                    <Text style={{marginLeft:'33%', bottom:10, fontWeight: 'bold'}}>{textSugar}</Text>
                  </View>
                </View>

                <View style={[styles.cardInfo, {width:325,}]}>
                  <Text style={styles.textCardInfo}>Produto de origem animal</Text>
                  <Image source={imageAnimal} style={[styles.imgCardinfo, {left:'41%'}]}/>
                  <Text style={{left:'25%', bottom:10, fontWeight: 'bold'}}>{textAnimal}</Text>
                </View>
                  
                </View> 
             
            </View>

            <View style={styles.thirdCard}>
               <Text style={{fontSize:16, color:'#B9B9B9', paddingLeft:10, paddingTop:10,}}>Lista de Ingredientes/Descrição</Text>
               <Text style={{fontSize:14, textAlign:"justify", margin:10}}>{description}</Text>
            </View>
            
          </View>
          <StatusBar hidden={true} />

      <StatusBar hidden={true} />
      {scanned && !modalVisible ? setScanned(false) : null}
    </View>
  );
}
const styles = StyleSheet.create({ 
    container:{
      flex: 1,
      // flexDirection:'column',
      // justifyContent: 'center'
    },

    containerModal:{
      flex:1,
      // justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#F9F6FA',
    },
    modalButton: {
      width:'50%',
      height:60,
    },
    ButtonTextModal: {
      color:'#fff',
      fontSize:20,
      top:'20%',
      textAlign:"center",
    },
    firstCard:{
      width:'85%',
      minHeight:60,
      maxHeight:80,
      top:30,
      backgroundColor:'#fff',
      borderRadius:10,
    },
    secondCard:{
      top:50,
      width:'85%',
      height:'50%',
      backgroundColor:'#fff',
      borderRadius:10,
    },

    thirdCard:{
      top:70,
      width:'85%',
      minHeight:'20%',
      maxHeight:'70%',
      backgroundColor:'#fff',
      borderRadius:10,
    },
    header: {
      // backgroundColor:'rgba(131, 109, 232, 0.5)',
      height:60,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,

    },
    cardInfo:{
      width:155,
      height:120,
      backgroundColor:'#F8F9FA',
      marginLeft:12,
      marginTop:15,
      borderRadius:10,
    },
    textCardInfo:{
      fontSize:12,
      textAlign:'center',
      color:'#808080',
      paddingTop:10,
    },
    imgCardinfo: {
      justifyContent:'center',
      alignItems:'center',
      left:'50%',
      marginRight:'50%',
      top:10,
    },
    imgCardinfoAL:{
      justifyContent:'center',
      alignItems:'center',
      left:'30%',
      marginRight:'25%',
      top:10,
    },
    contai: {
      flex: 1,
      position: 'absolute',
      bottom: 50,
      // flexDirection: 'row',
      // width: '100%',
      padding: 20,
      // justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },
    contain: {
      flex: 1,
      width: '100%',
      backgroundColor: 'transparent',
      flexDirection: 'row'
    },
    
    text: {
      color: "#fff", 
      top:550, 
      bottom:0,
      textAlign:'center',
      right:'42%',
      marginLeft:"22%", 
      // marginRight:"0%", 
      fontSize:16
    },
    button: {
      top:0,
      left:"38%",
      width: 220,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'transparent',
      borderWidth:1,
      borderColor:'#fff',
    },
 }); 