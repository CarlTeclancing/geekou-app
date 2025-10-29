import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { validateInput } from "../../contex/FormValidation"; // Import the function

const SignUp = ( {navigation} ) => {

    //form input variables

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //set errors 
    const [error, setError] = useState("");
  return (

    <SafeAreaView style={styles.containerPt}>
    <ScrollView style={styles.scroll}>

  
    <View style={styles.container}>
      <Text style={styles.h1}>Sign Up</Text>
      <Text>Please enter your details</Text>

      <View style={styles.narrow}>

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    setError(validateInput(text));
                }}
            />
        </View>

        <View style={styles.narrow}>

            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => {
                    setPassword(text);
                    setError(validateInput(text));
                }}
            />
        </View>
        <View style={styles.narrow}>

            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={confirmPassword}
                onChangeText={(text) => {
                    setConfirmPassword(text);
                    setError(validateInput(text));
                }}
            />
        </View>

        <TouchableOpacity
        style={styles.btnPrimary}
        
        onPress={() =>  navigation.navigate('OnboardingOne')}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text>-------OR-------</Text>

      <TouchableOpacity style={styles.btnSecondary}>
        <Text>Continue with Google </Text>
      </TouchableOpacity>

      <Text style={styles.text}>Already have an account? 
        <Text 
            style={styles.goto}
            onPress={() =>  navigation.navigate('Login')}
            >Goto LogIn</Text>
      </Text>


    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height:'100%',
        marginTop:24
    },

    containerPt:{
        paddingTop:40,
        height:"100%",
        paddingBottom:40
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
        color:'#000',
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
})