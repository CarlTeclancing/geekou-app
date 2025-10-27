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
   
            <Image source={icons.piechart} style={styles.img} />

          
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.h2}>Cards (1)</Text>
            <TouchableOpacity style={styles.btnSecondary}>
              <Text>Buy Card</Text>
            </TouchableOpacity>
          </View>

            <TouchableOpacity style={styles.btnSecondary100}>
              <Text style={styles.btnText}>Refere and Earn Get Your Link</Text>
            </TouchableOpacity>


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
    color:'#fff',
    backgroundColor:'#0065FF',
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
    backgroundColor:'#ffffffff',
    width:'100%',
    height:48,
    borderRadius:6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
    
  },
  btnSecondary:{
    borderColor:'#ffffffff',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:6,
    width:100,
    height:48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondary100:{
    borderColor:'#ffffffff',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:6,
    marginTop:23,
    width:'90%',
    height:48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow:{
    display:'flex',
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#c6ddffff',
    padding:12,
    marginTop:24,
    borderRadius:6
  },

btnText:{
    color:'#0065FF',
    fontSize:16,
    fontWeight:'bold'
},
h1:{
    fontSize:44,
    fontWeight:'bold',
    color:'white'
},
h2:{
  fontSize:24,
  fontWeight:'600',
},
text:{
    fontSize:16,
    color:'white'
},
img:{
  objectFit:'fill',
  marginRight:20,
  width:'40%',
  height:'100%'
},
transactions:{
  width:'90%',
  marginTop:32
  
},
scroll:{
  marginBottom:50
}
})