import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';

export default function MainProfileScreen() {
  const navigation = useNavigation();

  useEffect(() => {}, []);
  const onPress = () => navigation.navigate('Base', {screen: 'Simple'});

  return (
    <View style={styles.container}>
      <Text> Profile</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}
