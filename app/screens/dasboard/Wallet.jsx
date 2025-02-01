import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../../components/TopNav'

const Wallet = () => {
  return (
    <View style={styles.container}>
        <TopNav />
        <Text>Wallet Page</Text>
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      alignItems:'center',
    }
  })