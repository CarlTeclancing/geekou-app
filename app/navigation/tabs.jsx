import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Home from '../screens/dasboard/Home';
import Cards from '../screens/dasboard/Cards';
import Transactions from '../screens/dasboard/Transactions';
import Wallet from '../screens/dasboard/Wallet';
import { Colors, icons } from '../../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 30,
            backgroundColor: Colors.background,
          }}
        />
        <BottomTabBar {...props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props} />;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        style={
         { 
          backgroundColor: '#0065FF',
          
        }
        }
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.homeDark}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0065FF' : '#667085',
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />



      {/*wallet tab */}
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        style={
         { 
          backgroundColor: '#0065FF',
          
        }
        }
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.walletDark}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0065FF' : '#667085',
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />



      {/*Cards tab */}
      <Tab.Screen
        name="Cards"
        component={Cards}
        style={
         { 
          backgroundColor: '#0065FF',
          
        }
        }
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.CardDark}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0065FF' : '#667085',
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />


       {/*Cards tab */}
       <Tab.Screen
        name="Transactions"
        component={Transactions}
        style={
         { 
          backgroundColor: '#0065FF',
          
        }
        }
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.transactionsDark}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#0065FF' : '#667085',
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
