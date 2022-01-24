import React from 'react';
// stack
import BaseStackNavigator from '@navigation/baseStack';
import TabStackNavigator from '@navigation/tabStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContainer } from '@container'

const Drawer = createDrawerNavigator();
const Main = createStackNavigator();

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

const screenOptionDrawerStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Content"
      screenOptions={screenOptionDrawerStyle}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}>
      <Drawer.Screen name="Content">
        {() => (
          <Main.Navigator screenOptions={screenOptionStyle} initialRouteName="Base">
            <Main.Screen
              name="Base"
              component={BaseStackNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* <Main.Screen
              name="Bottom"
              component={TabStackNavigator}
              options={{
                headerShown: false,
              }}
            /> */}
          </Main.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MainStackNavigator;
