import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainHomeScreen, MainProfileScreen} from '@screen';
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
console.log(MainHomeScreen, MainProfileScreen);
const TabStackNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={screenOptionStyle}>
      <Tab.Screen name="HomeTab" component={MainHomeScreen} />
      <Tab.Screen name="SakuinTab" component={MainProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
