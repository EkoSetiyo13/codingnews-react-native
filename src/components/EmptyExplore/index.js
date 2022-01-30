import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';
import { HeaderComponent } from '@component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { theme } from '@constant/themes';

export default function EmptyExploreComponent() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent notif={true} />
      <View style={styles.container}>
        <Text style={styles.topText}>Anda Belum memilih tag untuk fokus ke pengetahuan koding</Text>
        <Image source={require('@asset/dummy/slider_image.png')} style={styles.imageSize} />
        <Text style={styles.normalText}>Tag Pengetahuan membantu anda dalam berbagi informasi terkait pengetahuan yang anda pilih</Text>
        <Text style={styles.normalText}>Pastikan anda milih tag pengetahuan yang anda minati atau tujuan tertentu</Text>

      </View >
      <View style={styles.buttonView}>
        <Button
          color={theme.color.white}
          mode='text'
          uppercase={false}
          style={{
            backgroundColor: theme.color.primary,
            width: "100%",
            height: 50,
            justifyContent: "center"
          }}
          onPress={() => console.log("click")}
          labelStyle={{ textAlign: 'center', fontSize: 16 }}
        >
          Tambah Tag Pengetahuan
        </Button>
      </View>
    </SafeAreaView>

  );
}
