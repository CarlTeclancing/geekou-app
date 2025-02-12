import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import TopNav from '../../../../components/TopNav'
import BackNav from '../../../../components/BackNav'
import { images } from '../../../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const BuyCard = ( {navigation} ) => {
  return (

    <SafeAreaView>
        <ScrollView>

            <View style={styles.container}>
                <BackNav pageTitle={'Buy Card'} />
                <View style={styles.col}>

                    <Text style={styles.h2}>Buy Card</Text>

                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Image source={images.mastercard} />

                            <Text style={styles.h1}>General Payment Card</Text>
                        </View>
                        <Text style={styles.h1Primary}>Buy for 7$ with 3$ Card Balance</Text>
    
                        <Text style={styles.text}>No transaction fees</Text>
                        <Text style={styles.text}>No charges for failed transactions</Text>
                        <Text style={styles.text}>Excellent for all types of payments online except crypto</Text>
                        <Text style={styles.text}>1.5% card top-up charge only</Text>
                        <Text style={styles.text}>$1.5 monthly maintenance fee</Text>

                        <TouchableOpacity
                            style={styles.btnPrimary}
                            onPress={() => navigation.navigate('VerificationLoader')}
                        >
                            <Text style={styles.btnText}>Buy Card Now</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Image source={images.mastercard} />

                            <Text style={styles.h1}>General Payment Card</Text>
                        </View>
                        <Text style={styles.h1Primary}>Buy for 7$ with 3$ Card Balance</Text>

                        <Text style={styles.text}>No transaction fees</Text>
                        <Text style={styles.text}>No charges for failed transactions</Text>
                        <Text style={styles.text}>Excellent for all types of payments online except crypto</Text>
                        <Text style={styles.text}>1.5% card top-up charge only</Text>
                        <Text style={styles.text}>$1.5 monthly maintenance fee</Text>

                        <TouchableOpacity
                            style={styles.btnPrimary}
                            onPress={() => navigation.navigate('VerificationLoader')}
                        >
                            <Text style={styles.btnText}>Buy Card Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default BuyCard

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:24,
        borderBottomWidth: 0.2,
        borderBottom:1,
        borderColor:'#D0D5DD',
        paddingBottom:60,
        
    },
    col:{
        width:'100%',
        marginLeft:32,
        marginTop:24,
        borderBottomWidth: 0.2,
        borderBottom:1,
        borderColor:'#D0D5DD',
        paddingBottom:60,
        
    },
    card:{
        backgroundColor:'#DEEBFF',
        width:'90%',
        height:392,
        borderRadius:12,
        padding:16,
        marginTop:24
    },
    h1:{
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:12
    },
    h2:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'bold',
        paddingLeft:12,
        marginTop:24,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    h1Primary:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'bold',
        marginTop:24,
        color:'#0058D4'
    },
    text:{
        marginTop:12,
        fontSize:16
    },
    btnPrimary: {
        backgroundColor: '#0065FF',
        width: '100%',
        height: 48,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
})