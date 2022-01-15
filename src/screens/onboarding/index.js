import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Text, View, Image } from 'react-native';
import styles from './style';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import { slides } from './slides';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '@constant/themes';

export default function OnBoardingScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageSize} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-round-forward"
          color={theme.color.primary}
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color={theme.color.white} size={24} />
      </View>
    );
  };
  const onDone = () => {
    const items = [['intro', 'intro']];
    AsyncStorage.multiSet(items);
    navigation.replace('Regulation');
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      onDone={onDone}
      showNextButton={false}
      showPrevButton={false}
      dotStyle={{ backgroundColor: 'rgba(0, 0, 0, .2)' }}
      activeDotStyle={styles.activeDot}
    />
  );
}
