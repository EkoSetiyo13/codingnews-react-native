import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// stack
import {SplashStackNavigator} from '@navigation/AuthStack';
import {IntroStackNavigator} from '@navigation/IntroStack';

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
    <Main.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Intro">
      <Main.Screen
        name="Intro"
        component={IntroStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Main.Navigator>
  );
};

export default MainStackNavigator;
