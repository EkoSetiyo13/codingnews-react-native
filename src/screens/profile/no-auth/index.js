import React, {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './style';
import {useFocusEffect} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NoAuthScreen() {
  const navigation = useNavigation();

  useEffect(() => {}, []);
  const onPress = () => navigation.navigate('Base', {screen: 'Simple'});

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('@asset/icon/logo.png')} />
      <Text style={styles.textNoAuth}>Anda belum login</Text>
      <Text style={styles.textNoAuth}>
        Silakan masuk terlebih dahulu untuk mendapat semua layanan di aplikasi
        ini
      </Text>
      <Button
        mode="contained"
        style={styles.buttonGoogle}
        onPress={() => console.log('Pressed')}>
        <View style={{width: 16, height: 1}}></View>
        <MaterialCommunityIcons
          name="login"
          size={24}
          color="#fff"
          style={styles.iconLogin}
        />
        <Text style={styles.btnText}>Hello World</Text>
      </Button>
      <GoogleSigninButton
        style={styles.buttonGoogle}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => console.log('Pressed')}
        disabled={false}
      />
      <Text style={styles.textNoAuth}>Belum punya akun ?</Text>
      <Text style={styles.textNoAuth}>Silakan daftar terlebih dahulu</Text>
    </View>
  );
}
