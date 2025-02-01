import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ( {navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Sign Up</Text>
      <Text>Please enter your details</Text>
      <View style={styles.col2}>
        <View style={styles.col}>

            <Text style={styles.label}>First Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: John"
                value=''
                onChangeText={(text) => ''}
            />
        </View>

        <View style={styles.col}>

            <Text style={styles.label}>First Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: Doe"
                value=''
                onChangeText={(text) => ''}
            />
        </View>
      </View>
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

            <Text style={styles.label}>Number:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your number"
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
        onPress={() =>  navigation.navigate('OnboardingOne')}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Already have an account? 
        <Text 
            style={styles.goto}
            onPress={() =>  navigation.navigate('Login')}
            >Goto LogIn</Text>
      </Text>
    </View>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%'
    },
    col2:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:24
    },
    col:{
        width:'48%'
    },
    narrow:{
        width:'90%',
        marginTop:16,

    },
    input:{
        borderWidth: 1,
        borderColor:'#D0D5DD',
        height: 58,
        width:'100%',
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:6,
        
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