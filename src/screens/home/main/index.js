import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './style';
import { HeaderComponent } from '@component';
import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SafeAreaView } from 'react-native-safe-area-context';



export default function MainHomeScreen() {
  const navigation = useNavigation();

  const arrayFeature = [[1, 2, 3, 4,], [5, 6, 7, 8]];
  const arrayNews = [1, 2, 3, 4,];


  useEffect(() => {

  }, []);
  const onPress = () => navigation.navigate('Base', { screen: 'Regulation' });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent notif={true} />
      <ScrollView
        nestedScrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewContainer}>
        <Card style={{ margin: 20 }}>
          <Card.Content>
            {arrayFeature.map((item, index) =>
              <View style={styles.viewVertical} key={index}>
                {item.map((sub, subindex) =>
                  <TouchableOpacity
                    key={subindex}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgba(0,0,0,0.2)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 75,
                      height: 75,
                      backgroundColor: '#fff',
                      borderRadius: 8,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 10,
                    }}
                  >
                    <MaterialCommunityIcons name="home" color={'#01a699'} size={26} />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </Card.Content>
        </Card>
        <View style={styles.viewText}>
          <Text style={styles.titleText}>Tahukah Kamu?</Text>
          {arrayNews.map((index, data) =>
            <TouchableOpacity key={index} activeOpacity={0.4} style={{ marginTop: 10, marginBottom: 10, width: '100%' }}>
              <Card style={{ height: 125 }}>
                <Card.Content>
                  <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.viewText}>
          <Text style={styles.titleText}>Pengetahuan Terbaru?</Text>
          {arrayNews.map((index, data) =>
            <TouchableOpacity key={index} activeOpacity={0.4} style={{ marginTop: 10, marginBottom: 10, width: '100%' }}>
              <Card style={{ height: 125, }}>
                <Card.Content>
                  <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          )}

        </View>
        <View style={styles.viewText}>
          <Text style={styles.titleText}>Jadilah Partisipasi</Text>
          <View style={styles.viewVertical}>
            <TouchableOpacity activeOpacity={0.4} style={{ margin: 10 }}>
              <Card style={{ width: 125, height: 125, }}>
                <Card.Content>
                  <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={{ margin: 10 }}>
              <Card style={{ width: 125, height: 125, }}>
                <Card.Content>
                  <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={{ margin: 10 }}>
              <Card style={{ width: 125, height: 125 }}>
                <Card.Content>
                  <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewDonate}>
          <MaterialCommunityIcons name="coffee" color={'#000000'} size={24} />
          <Text style={styles.textDonate}>Belikan saya kopi</Text>
          <MaterialCommunityIcons name="alpha-d-box" color={'#000000'} size={24} />
          <Text style={styles.textDonate}> atau Donasi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
