import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './style';
import { useIsFocused } from '@react-navigation/native';

export default function RegulationScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        navigation.replace('Bottom');
      }, 3000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text> Hallo </Text>
      <Text style={styles.versionText}>versi 1.10</Text>
    </View>
  );
}
