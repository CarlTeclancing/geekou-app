import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { images } from '../../constants';


function Splash({ navigation}) {
  return (
    <View style={styles.container}>
        <Image 
            source={images.logo}
        />
        <Image 
            style={styles.logo}
            source={images.creditcardpay}
        />

        <View>
          <Text style={styles.textBold}>Welcome To Geekou</Text>
        </View>
        <View>
          <Text>Making online payment fast and secured</Text>
        </View>
        <View>
          <Text>Create a virtual card in secods fast and reliable</Text>
        </View>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={() =>  navigation.navigate('SignUp ')}
      >
        <Text style={styles.btnSecText}>Register Now</Text>
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
    textBold:{
      fontSize:24,
      fontWeight:"bold",
      marginTop:24
    },
    btnPrimary:{
        backgroundColor:'#0065FF',
        width:'90%',
        height:48,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:32,
    },
    btnSecondary:{
        borderColor:'#0065FF',
        borderWidth:1,
        borderRadius:6,
        width:'90%',
        marginTop:24,
        height:48,
        alignItems: 'center',
        justifyContent: 'center',
      },
    btnText:{
        color:'#ffffff'
    },
    btnSecText:{
      color:'#0065FF'
    },
    logo:{
      width:'90%',
      height:'40%',
      borderRadius:24,
      marginTop:24
    }
})