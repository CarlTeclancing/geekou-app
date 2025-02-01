import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import React from 'react';
import Tabs from './navigation/tabs';
import Splash from './screens/Splash'; // Ensure correct path
import SignUp from './screens/SignUp';
import Home from './screens/dasboard/Home'
import Login from './screens/Login';
import OnboardingOne from './screens/OnboardingOne';
import Wallet from './screens/dasboard/Wallet';
import Cards from './screens/dasboard/Cards';
import Transactions from './screens/dasboard/Transactions';

const theme = {
  ...DefaultTheme.colors,
  border: 'transparent'
}

const Stack = createNativeStackNavigator(); // Call the function properly

const App = () => {
  return (
    //<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen" // Ensure correct spelling
      >
        <Stack.Screen name="SplashScreen" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />

        {/* Tabs*/}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Transactions" component={Transactions} />

      </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default App;
