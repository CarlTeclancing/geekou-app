import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../../components/TopNav'

const Transactions = () => {
  return (
    <View style={styles.container}>
        <TopNav />
        <Text>Transaction Page</Text>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      alignItems:'center',
    }
  })