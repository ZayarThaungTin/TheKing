import 'react-native-gesture-handler';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { StatusBar } from 'react-native';
// import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from '@react-navigation/native';
// import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
// import { NativeBaseProvider } from 'native-base';

// /* Redux */
// import { Provider } from 'react-redux';

// /* Screens */
import TransactionScreen from './TransactionScreen';
import AddTransactionScreen from './AddTransactionScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
// const TransactionStack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    
    const HomeStackScreen = ({navigation}) => {
      <HomeStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#009387',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <HomeStack.Screen name="Home" component={HomeScreen} options={{
              // title:'Overview',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
      </HomeStack.Navigator>
      };
      
      const DetailsStackScreen = ({navigation}) => {
      <DetailsStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#1f65ff',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              },
          }}>
              <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
      </DetailsStack.Navigator>
      };
        
      const TransactionStackScreen = ({navigation}) => {
        return (
          <Provider {...{ store }}>
          <ThemeProvider {...{ theme }}>
            {/* <LoadAssets {...{ assets, fonts }}> */}
              <SafeAreaProvider>
                <AppStack.Navigator headerMode="none" initialRouteName="">
                  {/* <AppStack.Screen
                    name="Transactions"
                    component={TransactionScreen}
                  />
                  <AppStack.Screen name="Add" component={AddTransactionScreen} /> */}
                  <AppStack.Screen
                    name="ExpenseTracker"
                    component={ExpenseNavigator}
                  />
                </AppStack.Navigator>
              </SafeAreaProvider>
            {/* </LoadAssets> */}
            <StatusBar />
          </ThemeProvider>
        </Provider>
        )
                          }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor='#009387'
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionStackScreen}
        options={{
          tabBarLabel: 'Transactions',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );


}

export default MainTabScreen;