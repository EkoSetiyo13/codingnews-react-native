import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

export default function SimpleScreen() {
  return (
    <View style={styles.container}>
      <Text> Hallo </Text>
    </View>
  );
}
