import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './style';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.push('OnBoarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text> Hallo </Text>
      <Text style={styles.versionText}>versi 1.10</Text>
    </View>
  );
}
