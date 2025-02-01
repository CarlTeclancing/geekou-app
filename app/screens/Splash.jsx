import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { images } from '../../constants';


function Splash({ navigation}) {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={images.logo}
        />
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Splash


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%'
    },
    btnPrimary:{
        backgroundColor:'#0065FF',
        width:'80%',
        height:48,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100,
    },
    btnText:{
        color:'#ffffff'
    }
})