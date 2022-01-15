import React, { useEffect, useState, useRef } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { Animated, Text, View, Image } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { fadeAnim, fadeIn, fadeOut } from './animated'


export default function SplashScreen() {
  const navigation = useNavigation();
  // const animation = useRef();

  useEffect(async () => {
    // animation.current.play();
    const token = await AsyncStorage.getItem('intro');
    fadeIn();
    setTimeout(() => {
      fadeOut();
      setTimeout(() => {
        if (token) {
          navigation.replace('SignIn');
        } else {
          navigation.replace('OnBoarding');
        }
      }, 1500);
    }, 3000);


  }, []);

  return (
    <View style={styles.container}>
      {/* <Text> Hallo </Text> */}
      {/* <LottieView
        source={require('@asset/lottie/loading-success.json')}
        // autoPlay
        loop={false}
        ref={animation}
      /> */}

      <Animated.View
        style={[
          {
            opacity: fadeAnim
          }
        ]}
      >
        <Image
          source={require('@asset/icon/logo_primary.png')}
          style={styles.imageSize}
        />
      </Animated.View>



      <Text style={styles.versionText}>Versi 1.0.0</Text>
      <Text style={styles.createByText}>Created By : Tim Asah Koding</Text>
    </View>
  );
}
