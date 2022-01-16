import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { HeaderComponent } from '@component';
import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';


export default function MainHomeScreen() {
  const navigation = useNavigation();

  useEffect(() => { }, []);
  const onPress = () => navigation.navigate('Base', { screen: 'Regulation' });
  return (
    <>
      <HeaderComponent />
      <View style={styles.container}>
        <Card style={{ margin: 20 }}>
          <Card.Content>
            <FlatGrid
              itemDimension={75}
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 75,
                    height: 75,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                  }}
                >
                  <MaterialCommunityIcons name="home" color={'#01a699'} size={26} />
                </TouchableOpacity>
              )}
            />
          </Card.Content>
        </Card>
        <Text> Home AA </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </>

  );
}
