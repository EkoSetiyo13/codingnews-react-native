import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainHomeScreen, MainProfileScreen, NoAuthScreen} from '@screen';
import BaseStackNavigator from '@navigation/baseStack';

const Tab = createMaterialBottomTabNavigator();

const screenOptionStyle = {
  tabBarActiveTintColor: '#FE641E',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#FE641E',
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerShown: false,
  headerMode: 'float',
  animation: 'fade',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};

const TabStackNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      initialRouteName="HomeTab"
      screenOptions={screenOptionStyle}
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="HomeTab"
        component={MainHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SakuinTab"
        component={MainProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NoAuthScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
