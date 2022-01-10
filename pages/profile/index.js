import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground,Image, TouchableOpacity, Modal } from "react-native";

import * as ImagePicker from "expo-image-picker";
import {  Entypo} from '@expo/vector-icons'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins'
import TextProfile from "../../components/textProfile"
import ChangeProfile from '../../components/changeProfile'
import Historic from "../../components/historic"
import {  Ionicons } from '@expo/vector-icons'
import axios from 'axios'


 export default function Profile({navigation, route}) {
    const uLog = route.params.username
    const [modalVisible, setModalVisible] = useState(false)
    const [modalHistoricVisible, setModalHistoricVisible] = useState(false)
    const [user, setUser] = useState([ ])
    const [userName, setuserName] = useState(null)
    const [email, setEmail] = useState(uLog.paramKey.value)
    const [userId, setUserId] =useState()


    useEffect(() => {
        axios.get('https://61d458748df81200178a8c45.mockapi.io/api/user').then (result => {
            setUser(result.data);
        })
    }, [])

    useEffect(() => {
        if(user!= null) {
            for(let i = 0; i < user.length; i++) {
                if (user[i].email == email) {
                    setuserName(user[i].userName)
                    setUserId(user[i].id)
                    break;
                }else{
                    // alert('email ou senha inválidos')
                }
            }   
        }
    }, [userName])

    useEffect(() => {
        if(user!= null) {
            console.log('entrou')
            for(let i = 0; i < user.length; i++) {
                if (user[i].email == uLog.paramKey.value) {
                    console.log('entou')
                    setuserName(user[i].userName)
                    break;
                }else{
                    // alert('email ou senha inválidos')
                }
            }   
        }

    }, [user])


    const [fontsLoaded] = useFonts ({
        Poppins_400Regular,
        Poppins_600SemiBold,
    })
    const [avatar, setAvatar] = useState();

    async function imagePickerCall() {
        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (data.cancelled) {
            return ;
        }
      
        if (!data.uri) {
            return;
        }

        setAvatar(data);

    }
    if(!fontsLoaded){
        return null;
    }
     return(
         <View style={{backgroundColor:"#FFFDFB", minHeight:700}}>
            <Modal
                visible={modalVisible}
                animationType='fade'
                propagateSwipe={true}
                transparent={true}
                onRequestClose= {() => setModalVisible(false)}>
                <View style={styles.header}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => setModalVisible(false)}>
                        <Ionicons name="arrow-back" size={30} color="black" />

                        <Text style={{fontSize:18 , fontWeight:"bold"}}>Meu perfil</Text>
                    </TouchableOpacity>

                </View>
                <ChangeProfile userEmail={uLog.paramKey.value}/>


            </Modal>

            <Modal
                visible={modalHistoricVisible}
                animationType='fade'
                propagateSwipe={true}
                transparent={true}
                onRequestClose= {() => setModalHistoricVisible(false)}>
                <View style={styles.header}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => setModalHistoricVisible(false)}>
                        <Ionicons name="arrow-back" size={30} color="black" />

                        <Text style={{fontSize:18 , fontWeight:"bold"}}>Histórico</Text>
                    </TouchableOpacity>

                </View>
                <Historic userEmail={uLog.paramKey.value}/>


            </Modal>

            <ImageBackground style={[styles.cardHeader,]}>
                <Image source={{uri:'https://as1.ftcdn.net/v2/jpg/02/11/97/88/1000_F_211978880_hc410XQCDAmGo103E8m6nFz6uXEKYqb6.jpg'}}
                    style={{ width: "100%", height: 100,opacity: 0.5}}   
                />
                <View style={[styles.container,]}>

                    <TouchableOpacity onPress={{}}>
                        <Image source={{uri: avatar ? avatar.uri : 'http://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png'}}
                            style={{height:90, width:90, borderRadius:45, bottom:35}}   
                        />
                    </TouchableOpacity>

                </View>

             </ImageBackground>
             <Text style={[{marginLeft:'48%', bottom:20, }, styles.text]}>{userName}</Text>
             <View>
                <TextProfile
                    labelText="Minhas informações"
                    onPress={() => setModalVisible(true)}
                />
                <TextProfile
                    labelText="Histórico de varreduras"
                    onPress={() => setModalHistoricVisible(true)}

                />

                <TextProfile
                    style={{borderBottomColor: "#FFFDFB"}}
                    labelText="Sair"
                    onPress={() => navigation.navigate('login', )
                }
                />
                
             </View>
         </View>
     )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        alignItems: "center",
    },
    cardHeader: {
        width: "100%",
        height: 100,
        // backgroundColor: "#80808025",
        marginBottom:90,
        resizeMode:"cover"
    },
    circleImage: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth:360,
        // height:110,
        // top: 270,
        // left: 46,
        // right: 46,
        // borderRadius:10,
    },
    circleIcon: {
        justifyContent:"center",
        alignItems: "center"
    },
    text:{
        justifyContent:"center",
        alignItems: "center",
        fontFamily: "Poppins_600SemiBold",
        fontSize:15,

    },header:{
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        width:'100%',
        height:60,
    }

})