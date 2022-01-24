import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainHomeScreen, MainProfileScreen, NoAuthScreen } from '@screen';
import { theme } from '@constant/themes';

const Tab = createMaterialBottomTabNavigator();

const TabStackNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#182135"
      initialRouteName="HomeTab"
      shifting={true}
      barStyle={{ backgroundColor: theme.color.primary }}>
      <Tab.Screen
        name="HomeTab"
        component={MainHomeScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}

      />
      <Tab.Screen
        name="Explore"
        component={MainProfileScreen}
        options={{
          tabBarLabel: 'Jelajahi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="earth" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NoAuthScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
