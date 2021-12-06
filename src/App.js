// import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StatusBar, LogBox, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import MainStackNavigator from '@navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '@constant/themes';

export default function App() {
  const scheme = useColorScheme();
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={theme.main.colorStatusBar} />
        <MainStackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
