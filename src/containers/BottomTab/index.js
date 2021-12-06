import React, {useEffect, useState} from 'react';
import '@api';
import {View, Text, ActivityIndicator, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import axios from 'axios';
import {SplashScreen, PHPLanguageScreen} from '@screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}} />
);

const PHPRoute = () => <View style={{flex: 1, backgroundColor: 'black'}} />;

const JavascriptRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    // tabStyle={{width: 150}}
    // scrollEnabled={true}
    activeColor={'white'}
    inactiveColor={'black'}
    indicatorStyle={{backgroundColor: 'blue', height: 0, borderRadius: 0}}
    style={{margin: 0}}
    bounces={false}
    renderLabel={({route, focused, color}) => (
      <Text style={{color, margin: 0}}>
        {route.title} {route.color}
      </Text>
    )}
    renderIcon={({route, focused, color}) => (
      <Icon
        name={focused ? 'bookmark-outline' : 'bookmark-outline'}
        color={color}
        size={24}
      />
    )}
  />
);

const renderScene = SceneMap({
  1: JavascriptRoute,
  2: SecondRoute,
  3: PHPRoute,
});

export default function BottomTabContainer() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 1, title: 'First'},
    {key: 2, title: 'Second'},
    {key: 3, title: 'Third'},
  ]);
  const [renderData, setRenderData] = useState({});

  useEffect(() => {
    // axios.get('/api/programming-language').then(response => {
    //   setRoutes(response.data);
    // });
  }, []);

  const renderLazyPlaceholder = () => (
    <ActivityIndicator size="large" color="#00ff00" />
  );

  if (routes == null) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderLazyPlaceholder={renderLazyPlaceholder}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      initialLayout={{width: layout.width}}
      tabBarPosition={'bottom'}
    />
  );
}
