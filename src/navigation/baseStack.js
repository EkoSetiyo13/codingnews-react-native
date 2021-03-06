import React from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  SplashScreen,
  OnBoardingScreen,
  RegulationScreen,
  SimpleScreen,
  SignInScreen,
  NotificationScreen
} from '@screen';
import BottomTabContainer from '@container/BottomTab/index';
import { isOptions } from '@service/helpers/checkUtil';
import {
  horizontalTransition,
  verticalTransition,
  centerTransition,
  fadeCenterTransition,
} from './transitions';
import TabStackNavigator from '@navigation/tabStack';

//BEST PRACTICE FOR
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
    elevation: 0,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerMode: 'screen',
}

const route = [
  [
    {
      name: 'Splash',
      component: SplashScreen,
    },
    {
      name: 'OnBoarding',
      component: OnBoardingScreen,
    },
    {
      name: 'Regulation',
      component: RegulationScreen,
      options: {
        headerShown: false,
        headerTitle: 'Baca Dulu',
      },
    },
  ],
  [
    {
      name: 'BottomTab',
      component: BottomTabContainer,
    },
  ],
  //EXAMPLE
  [
    {
      name: 'Simple',
      component: SimpleScreen,
    },
  ],
  //AUTH
  [
    {
      name: 'SignIn',
      component: SignInScreen,
    },
  ],
  [
    {
      name: 'Notif',
      component: NotificationScreen,
      options: {
        headerShown: true,
        headerTitle: 'Pemberitahuan',
        ...horizontalTransition
      }
    },
  ],
  [
    {
      name: 'Bottom',
      component: TabStackNavigator,
    },
  ],
];

const BaseStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash">
      {route.map((main, index) => {
        return (
          <Stack.Group key={index} navigationKey={`${index}`}>
            {main.map((data, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={data.name}
                  component={data.component}
                  options={{
                    ...data.options,
                    headerShown: isOptions(data, 'headerShown')
                      ? data.options.headerShown
                      : false,
                  }}
                />
              );
            })}
          </Stack.Group>
        );
      })}
    </Stack.Navigator>
  );
};

export default BaseStackNavigator;
