import React, {useEffect, useState} from 'react'; 
import {StyleSheet, Text, Image, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import userImg from '../assets/milena.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    const [userName , setuserName] = useState<string>();
    useEffect(() => {
      async function loadStorageUserName() {
        const user = await AsyncStorage.getItem('@plantmanager:user');
        setuserName(user || '');
      } 

      loadStorageUserName();
    },[]);
   return (
     <View style = { styles.container}>
       <View>
         <Text style={styles.greeting}> Olá</Text>
         <Text style={styles.userName}> {userName} </Text>
       </View>
        <Image source={userImg} style={styles.image}/>

     </View>
   )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: getStatusBarHeight()
  },

  image:{
    width: 70,
    height: 70,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.titulo,
    color: colors.heading,
    lineHeight: 40
  },


})