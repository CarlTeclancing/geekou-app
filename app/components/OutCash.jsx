import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import { images } from '../../constants'

const OutCash = () => {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={images.om}
        />
      <Text style={styles.text}>Orange Money</Text>
      <Text style={styles.danger}>-$15.00</Text>
      <Text style={styles.success}>Success</Text>
      <Text>Wed 1:00pm</Text>
    </View>
  )
}

export default OutCash

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:24,
        borderBottomWidth: 0.2,
        borderBottom:1,
        borderColor:'#D0D5DD',
        paddingBottom:12,
        
    },
    text:{
        fontSize:14,
        fontWeight:600
    },
    danger:{
        fontSize:14,
        fontWeight:800,
        color:'#F04438'
    },
    success:{
        backgroundColor:'#ECFDF3',
        color:'#027A48',
        padding:4,
        borderRadius:6
    }
})