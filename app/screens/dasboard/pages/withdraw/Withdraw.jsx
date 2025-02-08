import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput  } from 'react-native';
import {React, useState }from 'react';
import { images } from '../../../../../constants';
import BackNav from '../../../../components/BackNav';
import { validateInput } from "../../../../../contex/FormValidation"; // Import the function

const Withdraw = ( {navigation} ) => {

    const [active, setActive ] = useState(1)

    const [amount, setAmount] = useState('');
    const [number, setNumber] = useState('');

    //set errors 
    const [error, setError] = useState("");


  return (
    <View style={styles.container}>
      <BackNav pageTitle={'Withdraw Funds'} />
      <Text style={styles.h2}>Sellect Withdrawl Method</Text>


      <View 
        style={active == 1?styles.activeCol:styles.col}
        
        
        >
        <Image 
                style={styles.logo}
                source={images.momo}
            />

            <Text 
                style={styles.text}
                onPress={()=>setActive(1)}>Mobile Money</Text>
      </View>
       <View style={styles.narrow}>

            <Text style={styles.label}>Amount:</Text>
            <TextInput
                style={styles.input}
                placeholder="Minimum 10$"
                value={amount}
                onChangeText={(text) => {
                    setAmount(text);
                    setError(validateInput(text));
                }}
            />
        </View>
       <View style={styles.narrow}>

            <Text style={styles.label}>Mobile Number:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter account number"
                value={number}
                onChangeText={(text) => {
                    setNumber(text);
                    setError(validateInput(text));
                }}
            />
        </View>
        <View>
            <Text style={styles.text}>Withdrawal charge: $</Text>
            <Text style={styles.text}>Total USD: $</Text>
            <Text style={styles.text}>Total: XAF</Text>
        </View>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('WithdrawlLoaderScreen')}
      >
        <Text style={styles.btnText}>Withdraw Now</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default Withdraw

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'space-between',
        marginLeft:16,
        marginTop:24,
        borderBottomWidth: 0.2,
        borderBottom:1,
        borderColor:'#D0D5DD',
        paddingBottom:12,
        
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
    h2:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:32,
        textAlign:'left'
    },
    text:{
        margin:6,
        width:'80%',
    },
    col:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        marginTop:24,
        borderWidth: 1,
        borderColor:'#D0D5DD',
        padding:6,
        border:1,
        borderRadius:6
    },
    activeCol:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        marginTop:24,
        borderWidth: 2,
        borderColor:'#0065FF',
        padding:6,
        border:1,
        borderRadius:6
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
})