import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { HeaderComponent } from '@component';

export default function MainHomeScreen() {
  const navigation = useNavigation();

  useEffect(() => { }, []);
  const onPress = () => navigation.navigate('Base', { screen: 'Regulation' });
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <Text> Home AA </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
