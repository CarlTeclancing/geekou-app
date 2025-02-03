import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import {React, useState} from 'react'
import TopNav from '../../components/TopNav'
import TransactionDetails from '../../components/TransactionDetails'
import { SafeAreaView } from 'react-native-safe-area-context'
import Purchase from '../../components/Purchase'
import OutCash from '../../components/OutCash'

const Transactions = () => {

    const [ active, setActive ] = useState(1)
    

  let ballance = 12500
  return (
    <SafeAreaView>
    <ScrollView style={styles.scroll}>

        <View style={styles.container}>
          <TopNav />

          <View style={styles.transactions}>
            <Text style={styles.h2}>Recent Transactions</Text>
            <View style={styles.transactiontab}>
                <Text 
                    style={active ==1?styles.active:styles.notActive}
                    onPress={()=>setActive(1)}
                    >Top Ups</Text>
                <Text 
                    style={active==2?styles.active:styles.notActive}
                    onPress={()=>setActive(2)}
                    >Purchases</Text>
                <Text 
                    style={active==3?styles.active:styles.notActive}
                    onPress={()=>setActive(3)}
                    >Out Cash</Text>

            </View>
            <View style={active==1?styles.visible:styles.none}>
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />
              <TransactionDetails />

            </View>
            <View style={active==2?styles.visible:styles.none}>
              <Purchase />
              <Purchase />
              <Purchase />
              <Purchase />
              <Purchase />
              <Purchase />

            </View>


            <View style={active==3?styles.visible:styles.none}>
              <OutCash />
              <OutCash />
              <OutCash />
              <OutCash />
              <OutCash />
              <OutCash />

            </View>
          </View>
        </View>
    </ScrollView>

    </SafeAreaView>
  )
}

export default Transactions

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
  btnSecondary:{
    borderColor:'#0065FF',
    borderWidth:1,
    borderRadius:6,
    width:'45%',
    height:48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary:{
    backgroundColor:'#0065FF',
    width:'45%',
    height:48,
    borderRadius:6,
    alignItems: 'center',
    justifyContent: 'center',
},
btnText:{
    color:'#ffffff',
    fontSize:16
},
btnTextSecondary:{
    color:'#0065FF',
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
},
col2:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:24
},
transactiontab:{
    width:'100%',
    flexDirection:'row'
},
active:{
    margin:12,
    fontSize:16,
    fontWeight:'bold',
    color:'#0065FF',
    borderBottomWidth:4,
    borderColor:'#0065FF',
    paddingBottom:12
},
notActive:{
    margin:12,
    fontSize:16,
    fontWeight:'bold'
},
none:{
    display:'none'
}
})