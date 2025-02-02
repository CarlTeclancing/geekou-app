import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import { images } from '../constants'

const TopNav = () => {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={images.smallLogo}
        />

      <View>
        <Image 
                style={styles.logo}
                source={images.profileImage}
            />
      </View>
    </View>
  )
}

export default TopNav

const styles = StyleSheet.create({
    container:{
        width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:6
    },
    logo:{
        
        
    }
})