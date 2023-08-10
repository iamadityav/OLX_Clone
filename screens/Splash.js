import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 2000);
    },[])
  return (
    <View style={style.container}>
      <Text style={style.logo}>OLX</Text>
    </View>
  )
}

export default Splash;
const style = StyleSheet.create({
    container:{
        backgroundColor: '#6cd8e4',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    logo: {
        fontSize: 50,
        fontWeight: '700',
        color:'#fff'
    }
})