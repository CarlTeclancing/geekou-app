import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity, ScrollView  } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackNav from '../../../../components/BackNav';


const Referals = () => {

    const [cardAvailable, setCardAvailable] = useState(false);


  return (

    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.scroll}>
                <BackNav pageTitle={'Referal'} />
                
                <Text style={styles.text}>Make money from the people you refer to use our service</Text>
                <Text style={styles.text}>You will make $2.00 for each person you refer after te person buys the first card</Text>
                <Text style={styles.textBold}>My Referal Code</Text>
                <View style={styles.btnSecondary100}>
                    <Text>Comming Soon ......</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.same}>
                        <Text>Total number of referal</Text>
                        <Text style={styles.textBig}>125</Text>
                    </View>
                    <View style={styles.same}>
                        <Text>Total number of referal Paid</Text>
                        <Text style={styles.textBig}>15</Text>
                    </View>
                    <View style={styles.same}>
                        <Text>Total number of amount paid</Text>
                        <Text style={styles.textBig}>30$</Text>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>        
    </SafeAreaView>
      )
}

export default Referals

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  scroll:{
  marginTop:12,
  display:'flex',
  width:'90%',
  alignItems:'center'
},
text:{
    fontSize:16,
    textAlign:'left',
    marginTop:12
},
  btnSecondary100: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 48,
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
    backgroundColor:'#dce9fdff'
  },
  container2:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:24
  },
  same:{
    width:'45%',
    backgroundColor:'#f3f8ffff',
    height:100,
    borderRadius:12,
    padding:24,
    margin:6,

  },
  textBold:{
    fontWeight:'bold',
    fontSize:20,
    marginTop:24,
    marginBottom:24,
    textAlign:'left',
    width:'100%'
  },
  textBig:{
    fontSize:20,
    fontWeight:'bold'
  }
})