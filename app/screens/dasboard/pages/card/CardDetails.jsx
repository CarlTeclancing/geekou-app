import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity, ScrollView  } from 'react-native'
import React, {useState} from 'react'
import TopNav from '../../../../components/TopNav'
import { images, icons } from '../../../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackNav from '../../../../components/BackNav'


const CardDetails = ( {navigation}) => {
    const [cardAvailable, setCardAvailable] = useState(true);
    
  return (

    <SafeAreaView>
        <ScrollView style={styles.scroll}>

            <View style={styles.container}>
                <BackNav pageTitle={'Card Details'} />
                    <View style={styles.col4}>
                        <Text style={styles.h2}>Card Details</Text>

                    </View>
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
                            <Text style={styles.text}>No transaction fees</Text>
                            <Text style={styles.text}>No charges for failed transactions</Text>
                            <Text style={styles.text}>Excellent for all types of payments online except crypto</Text>
                            <Text style={styles.text}>1.5% card top-up charge only</Text>
                            <Text style={styles.text}>$1.5 monthly maintenance fee</Text>
            
                        </View>
                </View>
                
            </View>
        </ScrollView>

    
    </SafeAreaView>
      )
}

export default CardDetails

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
        flexDirection: 'column',
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
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:32,
    },
    col4:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:32,
        marginTop:24
    },
    transactions:{
        width:'90%',
        marginTop:24,
        
      },
      scroll:{
        marginBottom:50,
        paddingTop:24
},
    con:{
        width:'90%',
        marginBottom:32
    },
    none:{
        display:'none',
    }
  })