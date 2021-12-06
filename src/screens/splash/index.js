import React, {useEffect, useState, useRef} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
  const navigation = useNavigation();
  const animation = useRef();

  useEffect(async () => {
    animation.current.play();
    const token = await AsyncStorage.getItem('intro');
    setTimeout(() => {
      if (token) {
        navigation.replace('Regulation');
      } else {
        navigation.replace('OnBoarding');
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text> Hallo </Text> */}
      <LottieView
        source={require('@asset/lottie/loading-success.json')}
        // autoPlay
        loop={false}
        ref={animation}
      />

      <Text style={styles.versionText}>versi 1.10</Text>
    </View>
  );
}
