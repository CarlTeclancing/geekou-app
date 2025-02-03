import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native'
import {React, useState }from 'react'
import { images } from '../../../../../constants'
import BackNav from '../../../../components/BackNav'

const SellectPaymentMethod = ( {navigation} ) => {

    const [active, setActive ] = useState(0)


  return (
    <View style={styles.container}>
      <BackNav pageTitle={'Add Funds'} navigationLink={'Wallet'} />
      <Text style={styles.h2}>Sellect Payment Method</Text>


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

      <View style={active == 2?styles.activeCol:styles.col}>
        <Image 
                style={styles.logo}
                source={images.om}
            />

            <Text 
                style={styles.text}
                onPress={()=>setActive(2)}
            >Orange Money</Text>
      </View>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('TopUp')}
      >
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default SellectPaymentMethod

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
    }
})