import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';
import { Button, IconButton } from 'react-native-paper';
import { theme } from '@constant/themes';
import { showMessageInDevelopment } from '@service/flash-massage';
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
  const navigation = useNavigation();

  const handleClickNoSigIn = () => {
    navigation.navigate('Bottom');
  }
  return (
    <View style={styles.container}>

      <IconButton
        icon="information"
        animated={true}
        color={theme.color.primary}
        size={30}
        onPress={() => console.log('Pressed')}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <Image
        source={require('@asset/icon/logo_primary.png')}
        style={styles.imageSize}
      />
      <Text style={styles.welcomeText}> Selamat Datang di Buku Saku Programmer </Text>

      <View style={styles.contentView}>
        <Text>Dapatkan manfaat lebih banyak dengan membuat dan masuk dengan akun terlebih dahulu</Text>

        <Button
          color={theme.color.white}
          mode='text'
          uppercase={false}
          onPress={showMessageInDevelopment}
          style={{
            backgroundColor: theme.color.primary,
            marginTop: 10,
            marginBottom: 10
          }}
          labelStyle={{ textAlign: 'center', }}

        >
          Buat Akun Sekarang
        </Button>
        <Button
          color={theme.color.white}
          mode='text'
          uppercase={false}
          onPress={showMessageInDevelopment}
          style={{
            backgroundColor: theme.color.primary,
            marginTop: 10,
            marginBottom: 10
          }}
          labelStyle={{ textAlign: 'center', }}

        >
          Masuk
        </Button>

        <Text style={{
          marginTop: 40,
          textAlign: 'center'
        }}>
          Coba jelajahi Aplikasi ini
        </Text>

        <Button
          color={theme.color.white}
          mode='text'
          uppercase={false}
          onPress={handleClickNoSigIn}
          style={{
            backgroundColor: theme.color.primary,
            marginTop: 10,
            marginBottom: 10
          }}
          labelStyle={{ textAlign: 'center', }}

        >
          Lewati
        </Button>
      </View>
    </View>
  );
}
