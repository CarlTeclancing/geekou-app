import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {React, useState }from 'react'
import { icons } from '../constants'

const BackNav = ( {pageTitle, navigation}) => {

    

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() =>  navigation.navigate('Wallet')}
        >
                    <Image 
            style={styles.logo}
            source={icons.back}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
            {pageTitle}
      </Text>
      <Text>

      </Text>
    </View>
  )
}

export default BackNav

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:20,
        marginTop:-6,
        marginLeft:-16
    },
    title:{
        fontSize:16,
        fontWeight:700
    }
})