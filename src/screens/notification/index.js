import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, ActivityIndicator, TouchableOpacity, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '@constant/themes';
import { EmptyNotifComponent, SimpleLoadingComponent, NotificationCardComponent } from '@component'
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeArray } from '@service/helpers/Util';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AlredyRead from './AlredyRead';
import Unread from './Unread';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={{ width: wp('50%') }}
    scrollEnabled={true}
    indicatorStyle={{ backgroundColor: 'blue', height: 3, borderRadius: 3 }}
    pressOpacity={0.1}
    pressColor={'white'}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, color }) => (
      <Text style={{ color: 'black', margin: 8, fontSize: theme.fontSize.h5 }}>{route.title}</Text>
    )}
  />
);

const renderScene = SceneMap({
  1: AlredyRead,
  2: Unread,

});

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function NotificationScreen() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 1, title: 'Belum DiBaca' },
    { key: 2, title: 'Sudah DiBaca' },
  ]);

  const renderLazyPlaceholder = () => (
    <ActivityIndicator size="large" color="#00ff00" />
  );


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderLazyPlaceholder={renderLazyPlaceholder}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
      tabBarPosition={'top'}
    />
  );
}
