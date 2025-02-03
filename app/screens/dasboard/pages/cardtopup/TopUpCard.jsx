import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput  } from 'react-native'
import {React, useState }from 'react'
import { images } from '../../../../../constants'
import BackNav from '../../../../components/BackNav'

const TopUpCard = ( {navigation} ) => {

    const [active, setActive ] = useState(0)


  return (
    <View style={styles.container}>
      <BackNav pageTitle={'Add Funds'} />



      <View style={active == 1?styles.activeCol:styles.col} >
        <View>
              <Text style={styles.h2}>Total Current Balance</Text>
              <Text style={styles.h1}>2600$</Text>

        </View>

      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={() =>  navigation.navigate('TopUp')}
      >
        <Text style={styles.btnSecondaryText}>+ Top Up Wallet</Text>
      </TouchableOpacity>
           
      </View>
       <View style={styles.narrow}>

            <Text style={styles.label}>Amount:</Text>
            <TextInput
                style={styles.input}
                placeholder="Minimum 10$"
                value=''
                onChangeText={(text) => ''}
            />
        </View>

        <View>
            <Text style={styles.text}>Top-Up charge: $</Text>
            <Text style={styles.text}>Total USD: $</Text>
        </View>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('CardTopUpLoaderScreen')}
      >
        <Text style={styles.btnText}>Top Up Card</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default TopUpCard

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
    h1:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:6,
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
        justifyContent:'space-between',
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
    btnSecondary:{
        borderWidth:1,
        borderColor:'#0065FF',
        width:'40%',
        height:48,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6
    },
    btnSecondaryText:{
        color:'#0065FF',
        fontSize:14
    }
})