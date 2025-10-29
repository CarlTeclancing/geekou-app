import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState }from 'react';
import { validateInput } from "../../contex/FormValidation"; // Import the function
import { registerUser } from '../../actions/api';


const OnboardingOne = ( {navigation} ) => {

    // const { userData } = route.params; // Get passed data
    // const firstName = userData.first_name;
    // const lastName = userData.last_name;
    // const email = userData.email;
    // const phoneNumber = userData.phone_number;
    // const password = userData.password;


    //form input variables
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone_number, setNumber] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [dob, setDOB] = useState("");
    const [idNumber, setIdNumber] = useState("");

    //set errors 
    const [error, setError] = useState("");


    // const handleSignup = async () => {
    //     try {
    //       const data = await registerUser(
    //         firstName,
    //         lastName,
    //         email,
    //         phoneNumber,
    //         password,
    //         country,
    //         state,
    //         postalCode,
    //         dob,
    //         idNumber,
    //       );
    //       Alert.alert("Success", data.message);
         
    //     } catch (error) {
    //       Alert.alert("Error", "Failed to register");
    //     }
    //   };

    return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details</Text>
      <Text>Please enter your details</Text>
            <View style={styles.col2}>
            <View style={styles.col}>
                  <Text style={styles.label}>First Name:</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="ex: John"
                      value={first_name}
                      onChangeText={(text) => {
                          setFirstName(text);
                          setError(validateInput(text));
                      }}
                  />
                  {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
              </View>
      
              <View style={styles.col}>
      
                  <Text style={styles.label}>Last Name:</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="ex: Doe"
                      value={last_name}
                      onChangeText={(text) => {
                          setLastName(text);
                          setError(validateInput(text));
                      }}
                  />
              </View>
            </View>
                    <View style={styles.narrow}>
            
                        <Text style={styles.label}>Number:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your number"
                            value={phone_number}
                            onChangeText={(text) => {
                                setNumber(text);
                                setError(validateInput(text));
                            }}
                        />
                    </View>

        <View style={styles.narrow}>

            <Text style={styles.label}>Country:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Country"
                value={country}
                onChangeText={(text) => {
                    setCountry(text);
                    setError(validateInput(text));
                }}
            />
        </View>
      <View style={styles.col2}>
        <View style={styles.col}>

            <Text style={styles.label}>State:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: Center"
                value={state}
                onChangeText={(text) => {
                    setState(text);
                    setError(validateInput(text));
                }}
            />
        </View>

        <View style={styles.col}>

            <Text style={styles.label}>Postal Code:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: 11101"
                value={postalCode}
                onChangeText={(text) => {
                    setPostalCode(text);
                    setError(validateInput(text));
                }}
            />
        </View>
      </View>

      <View style={styles.col2}>
        <View style={styles.col}>

            <Text style={styles.label}>Date of Birth:</Text>
            <TextInput
                style={styles.input}
                placeholder="yyyy-mm-dd"
                value={dob}
                onChangeText={(text) => {
                    setDOB(text);
                    setError(validateInput(text));
                }}
            />
        </View>

        <View style={styles.col}>

            <Text style={styles.label}>Id Number:</Text>
            <TextInput
                style={styles.input}
                placeholder="ex: 1234"
                value={idNumber}
                onChangeText={(text) => {
                    setIdNumber(text);
                    setError(validateInput(text));
                }}
            />
        </View>
      </View>

        <TouchableOpacity
        style={styles.btnPrimary}
        onPress={()=> navigation.navigate('Verifiction')}
      >
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>


    </View>
    
  )
}

export default OnboardingOne

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
        color:'#000',
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