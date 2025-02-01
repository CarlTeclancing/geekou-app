import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
      <Text>Welcome back! Please enter your detials.</Text>
      <View style={styles.narrow}>

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value=''
                onChangeText={(text) => ''}
            />
        </View>

        <View style={styles.narrow}>

            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value=''
                onChangeText={(text) => ''}
            />
        </View>

        <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Don't have an account? 
        <Text 
            style={styles.goto}
            onPress={() =>  navigation.navigate('SignUp')}
            >Sign up</Text>
      </Text>
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%'
    },
    narrow:{
        width:'90%',
        marginTop:24,

    },
    input:{
        borderWidth: 1,
        borderColor:'#D0D5DD',
        height: 58,
        width:'100%',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:16,
        
    },
    label:{
        fontSize:14,
        fontWeight:'500'
    },
    btnPrimary:{
        backgroundColor:'#0065FF',
        width:'90%',
        height:48,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:48,
    },
    btnText:{
        color:'#ffffff',
        fontSize:16
    },
    h1:{
        fontSize:44,
        fontWeight:'bold',
    },
    text:{
        marginTop:24
    },
    goto:{
        color: '#0065FF',
        fontWeight: '800',
        marginLeft:4,
        margin:12
    }
})