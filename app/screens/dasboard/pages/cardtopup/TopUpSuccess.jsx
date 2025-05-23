import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { icons } from '../../../../../constants'

const CardTopUpSuccess = ( {navigation }) => {
  return (
    <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={icons.success}
            />
      <Text>Top Up Successful</Text>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() =>  navigation.navigate('Home')}
      >
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CardTopUpSuccess

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:24,
        borderBottomWidth: 0.2,
        borderBottom:1,
        borderColor:'#D0D5DD',
        paddingBottom:12,
        flex:1,
        
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
})