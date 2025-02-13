import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuyCardLoaderScreen = () => {
  const navigation = useNavigation();
  const [  cardAvailable, setCardAvailable ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCardAvailable(true);
      navigation.replace('Home'); // Replace with your target screen name
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default BuyCardLoaderScreen;
