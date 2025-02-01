import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNav from '../../../components/TopNav'

const Home = () => {

  let ballance = 12500
  return (
    <View style={styles.container}>
      <TopNav />

      <View style={styles.ballanceContainer}>
        <Text style={styles.text}>Total Current Balance</Text>
        <Text style={styles.h1}>{ballance}$</Text>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() =>  navigation.navigate('OnboardingOne')}
        >
          <Text style={styles.btnText}>+ Top Up</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.transactions}>
        <Text style={styles.h2}>Recent Transactions</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    
  },
  ballanceContainer:{
    width:'90%',
    padding:16,
    borderColor:'#0065FF',
    borderWidth:1,
    marginTop:44,
    borderRadius:6
  },
  btnPrimary:{
    backgroundColor:'#0065FF',
    width:'50%',
    height:48,
    borderRadius:6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
},
btnText:{
    color:'#ffffff',
    fontSize:16
},
h1:{
    fontSize:44,
    fontWeight:'bold',
},
h2:{
  fontSize:24,
  fontWeight:'600',
},
text:{
    fontSize:16
},
transactions:{
  width:'90%',
  marginTop:32
  
}
})