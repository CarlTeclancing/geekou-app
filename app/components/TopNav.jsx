import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import { images } from '../../constants';

const TopNav = () => {
  const navigation = useNavigation(); // ✅ Get navigation object

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.smallLogo} />

      <View>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => navigation.navigate('Profile')} // ✅ No more error
        >
          <Image style={styles.logo} source={images.profileImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  logo: {
    
  },
});
