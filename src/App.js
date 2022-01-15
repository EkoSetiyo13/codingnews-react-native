// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, LogBox, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import MainStackNavigator from '@navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '@constant/themes';
import FlashMessage from "react-native-flash-message";


export default function App() {
  const scheme = useColorScheme();
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <StatusBar backgroundColor={theme.main.colorStatusBar} />
          <MainStackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
      <FlashMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});