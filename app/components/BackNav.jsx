import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import {React, useState }from 'react'
import { icons } from '../../constants'

const BackNav = ( { pageTitle}) => {

  const navigation = useNavigation(); // ✅ Get navigation object

  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() =>  navigation.navigate('Home')}
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
        width:'90%',
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