import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../../components/TopNav'


const Cards = () => {
  return (
    <View style={styles.container}>
        <TopNav />
        <Text>Cards Page</Text>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      alignItems:'center',
    }
  })