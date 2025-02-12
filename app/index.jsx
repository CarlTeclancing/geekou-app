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
import SellectPaymentMethod from './screens/dasboard/pages/topup/SellectPaymentMethod';
import TopUp from './screens/dasboard/pages/topup/TopUp';
import LoaderScreen from './components/Spinner';
import TopUpSuccess from './screens/dasboard/pages/topup/TopUpSuccess';
import SellectWithdrawalMethod from './screens/dasboard/pages/withdraw/SellectWithdrawalMethod';
import Withdraw from './screens/dasboard/pages/withdraw/Withdraw';
import WithdrawlLoaderScreen from './screens/dasboard/pages/withdraw/Spinner';
import WithdrawalSuccess from './screens/dasboard/pages/withdraw/WithdrawSuccess';
import TopUpLoaderScreen from './screens/dasboard/pages/topup/Spinner';
import TopUpCard from './screens/dasboard/pages/cardtopup/TopUpCard';
import CardTopUpLoaderScreen from './screens/dasboard/pages/cardtopup/Spinner';
import CardTopUpSuccess from './screens/dasboard/pages/cardtopup/TopUpSuccess';
import Profile from './screens/dasboard/pages/profile/profile';
import ForgotPassword from './screens/ForgotPassword';
import Verifiction from './screens/Verifiction';
import VerificationLoader from './screens/Spinner';
import BuyCard from './screens/dasboard/pages/card/BuyCard';
import CardDetails from './screens/dasboard/pages/card/CardDetails';

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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Verifiction" component={Verifiction} />
        <Stack.Screen name="VerificationLoader" component={VerificationLoader} />

        {/* Tabs*/}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Transactions" component={Transactions} />

        {/*Loader component */} 
        <Stack.Screen name="LoaderScreen" component={LoaderScreen} />

        {/*Dashbaord pages */}
        <Stack.Screen name="SellectPaymentMethod" component={SellectPaymentMethod} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="TopUpSuccess" component={TopUpSuccess} />
        <Stack.Screen name="TopUpLoaderScreen" component={TopUpLoaderScreen} />

        {/*Withdrawal pages */}
        <Stack.Screen name="SellectWithdrawalMethod" component={SellectWithdrawalMethod} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
        <Stack.Screen name="WithdrawalSuccess" component={WithdrawalSuccess} />
        <Stack.Screen name="WithdrawlLoaderScreen" component={WithdrawlLoaderScreen} />

        {/* card in pages */}
        <Stack.Screen name="TopUpCard" component={TopUpCard} />
        <Stack.Screen name="CardTopUpLoaderScreen" component={CardTopUpLoaderScreen} />
        <Stack.Screen name="CardTopUpSuccess" component={CardTopUpSuccess} />
        <Stack.Screen name="BuyCard" component={BuyCard} />
        <Stack.Screen name="CardDetails" component={CardDetails} />

        {/*profile */}
        <Stack.Screen name="Profile" component={Profile} />


      </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default App;
