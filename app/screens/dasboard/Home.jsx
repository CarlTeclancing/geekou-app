import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import TransactionDetails from '../../components/TransactionDetails'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../../constants'

const Home = ( {navigation} ) => {

  let ballance = 12500
  return (
    <SafeAreaView>
    <ScrollView style={styles.scroll}>

        <View style={styles.container}>
          <TopNav />

          <View style={styles.ballanceContainer}>
            <View style={styles.col}>
              
              <Text style={styles.text}>Total Current Balance</Text>
              <Text style={styles.h1}>{ballance}$</Text>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() =>  navigation.navigate('SellectPaymentMethod')}
              >
                <Text style={styles.btnText}>+ Top Up</Text>
            </TouchableOpacity>
              
          </View>
          <View>
            <Image source={icons.piechart}/>
          </View>
          
          </View>

          <View style={styles.transactions}>
            <Text style={styles.h2}>Recent Transactions</Text>
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />
          </View>
        </View>
    </ScrollView>

    </SafeAreaView>
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
    borderRadius:6,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  col:{
    width:'50%',

  },
  btnPrimary:{
    backgroundColor:'#0065FF',
    width:'100%',
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
  
},
scroll:{
  marginBottom:50
}
})