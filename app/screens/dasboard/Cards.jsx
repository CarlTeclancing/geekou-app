import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity, ScrollView  } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import { images, icons } from '../../../constants'
import TransactionDetails from '../../components/TransactionDetails'
import { SafeAreaView } from 'react-native-safe-area-context'


const Cards = ( {navigation}) => {

    let cardAvailable = true;
  return (

    <SafeAreaView>
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>
                <TopNav />
                
                    <Text style={styles.h2}>My Cards</Text>
                    <View style={cardAvailable === true?styles.container2:styles.none}>

                        <View style={styles.cardHold}>
                            <ImageBackground 
                                source={images.creditcard} 
                                style={{ alignItems: 'center', width:'100%', height:'100%', marginLeft:10 }}
                                >
                                <View style={styles.col}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>General Payment Card</Text>
                                    <Image 
                                        style={styles.logo}
                                        source={icons.copy}
                                    />
                                </View>
            
                                <View style={styles.col2}>
                                    <View>
                                        <Text style={{ color: 'white', fontSize: 16 }}>YUVEN CARLSON     05/24</Text>
                                        <Text style={{ color: 'white', fontSize: 16 }}>1234 1234 1234 1234</Text>
                                    </View>
                                    <Image 
                                        style={styles.logo}
                                        source={images.visaTag}
                                    />
                                </View>
                                
                            </ImageBackground>
            
                        </View>
            
                        <View style={styles.col3}>
            
                            <TouchableOpacity
                                style={styles.btnPrimary}
                                onPress={() =>  navigation.navigate('TopUpCard')}
                                >
                                <Text style={styles.btnText}>+ Top Up</Text>
                            </TouchableOpacity>
            
                            <TouchableOpacity
                                style={styles.btnSecondary}
                                onPress={() =>  navigation.navigate('OnboardingOne')}
                                >
                                <Text style={styles.btnTextSecondary}>- Withdraw</Text>
                            </TouchableOpacity>
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
                    <View  style={cardAvailable === false?styles.con:styles.none}>
                        <Image 
                            style={styles.nocard}
                            source={icons.nocard}
                        />
                        
                        <Text style={styles.h2left}>You do not have any card available </Text>
                        <TouchableOpacity
                                style={styles.btnPrimary100}
                                onPress={() =>  navigation.navigate('TopUpCard')}
                                >
                                <Text style={styles.btnText}>Buy $ Card Now</Text>
                        </TouchableOpacity>
                    </View>

                
            </View>
        </ScrollView>

    
    </SafeAreaView>
      )
}

export default Cards

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      flexDirection: 'column'
    },
    container2:{
        width:'100%',
        alignItems:'center',
        flexDirection: 'column'
    },
    cardHold:{
        width:'100%',
        height:200,
        alignItems:'center',
        justifyContent:'center',
        marginTop:16,
        borderRadius:12
      },
      btnPrimary:{
        backgroundColor:'#0065FF',
        width:'50%',
        height:48,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPrimary100:{
        backgroundColor:'#0065FF',
        width:'100%',
        height:48,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40
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
    btnTextSecondary:{
        color:'#0065FF',
        fontSize:16
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
      alignSelf:'left',
      marginLeft:16,
      marginTop:32
    },
    text:{
        fontSize:16
    },
    h2left:{
        textAlign:'center',
        fontSize:16
    },
    col:{
        width:'82%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12,
    },
    col2:{
        width:'82%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:80,
    },
    col3:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:24
    },
    transactions:{
        width:'90%',
        marginTop:32,
        
      },
      scroll:{
        marginBottom:50
},
    con:{
        width:'90%',
        marginBottom:40
    },
    none:{
        display:'none',
    }
  })