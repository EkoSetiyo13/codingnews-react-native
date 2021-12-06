import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// stack
import BaseStackNavigator from '@navigation/baseStack';
import TabStackNavigator from '@navigation/tabStack';
const Main = createNativeStackNavigator();
// const Main = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: true,
};

const MainStackNavigator = () => {
  return (
    <Main.Navigator screenOptions={screenOptionStyle} initialRouteName="Base">
      <Main.Screen
        name="Base"
        component={BaseStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Main.Screen
        name="Bottom"
        component={TabStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Main.Navigator>
  );
};

export default MainStackNavigator;
