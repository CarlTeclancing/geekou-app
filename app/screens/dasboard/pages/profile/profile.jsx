import { StyleSheet, Text, View, Image, TouchableOpacity, navigation } from 'react-native'
import React from 'react'
import BackNav from '../../../../components/BackNav'
import { images,icons } from '../../../../../constants'




const Profile = ( {navigation} ) => {
  return (
    <View style={styles.container}>
        <BackNav pageTitle={'Profile'} />
        <View style={styles.col}>
            <Image 
                source={images.profileimg}
            />
            <Text style={styles.h1}>Yuven Carlson</Text>
        </View>

        <View style={styles.sec}>
            <View style={styles.col1}>
                <Text>Invite Friends</Text>
                <Image 
                    style={styles.go}
                     source={icons.right}
                />
            </View>

            <View style={styles.col1}>
                <Text>Privacy Policy</Text>
                <Image 
                    style={styles.go}
                     source={icons.right}
                />
            </View>

            <View style={styles.col1}>
                <Text>Terms and Conditions</Text>
                <Image 
                    style={styles.go}
                     source={icons.right}
                />
            </View>

            <View style={styles.col1}>
                <Text>Help & Support</Text>
                <Image 
                    style={styles.go}
                     source={icons.right}
                />
            </View>
        </View>

        <View>
        <TouchableOpacity 
            style={styles.sec1}
            onPress={() =>  navigation.navigate('Login')}
        >
                <Text>Logout</Text>
                <Image 
                    style={styles.go}
                     source={icons.right}
                />
        </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:16,
        
        
    },
    col:{
        marginTop:32,
        alignItems:'center',
    },
    h1:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:24
    },
    col1:{
        with:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        borderBlockColor:'#D0D5DD',
        borderBottom:1,
        borderBottomWidth:1,
        marginTop:24,
        paddingBlock:12

    },
    sec:{
        width:'90%',
        height:54,
        justifyContent:'center',
        marginTop:100

    },
    sec1:{
        backgroundColor:'#F04438',
        marginTop:200,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        height:54,
        alignItems:'center',
        padding:12,
        borderRadius:6,
    }

})