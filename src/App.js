// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, LogBox, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {
  Provider,
} from "react-native-paper";
import MainStackNavigator from '@navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '@constant/themes';
import FlashMessage from "react-native-flash-message";


export default function App() {
  const scheme = useColorScheme();
  useEffect(() => {
    // LogBox.ignoreLogs(["VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead."]);
    LogBox.ignoreAllLogs();
  }, [])
  return (
    <Provider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={theme.main.colorStatusBar} />
          <MainStackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
      <FlashMessage />
    </Provider >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});