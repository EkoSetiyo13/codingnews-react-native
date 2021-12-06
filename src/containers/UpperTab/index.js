import React, {useEffect, useState} from 'react';
import '@api';
import {View, Text, ActivityIndicator, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import axios from 'axios';
import {SplashScreen, PHPLanguageScreen} from '@screen';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const PHPRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const JavascriptRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={{width: 150}}
    scrollEnabled={true}
    indicatorStyle={{backgroundColor: 'blue', height: 3, borderRadius: 3}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, color}) => (
      <Text style={{color: 'black', margin: 8}}>{route.title}</Text>
    )}
  />
);

const renderScene = SceneMap({
  1: JavascriptRoute,
  2: SplashScreen,
  3: PHPLanguageScreen,
  4: PHPRoute,
  5: PHPRoute,
  6: PHPRoute,
  7: PHPRoute,
});

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [renderData, setRenderData] = useState({});

  useEffect(() => {
    axios.get('/api/programming-language').then(response => {
      setRoutes(response.data);
    });
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
      tabBarPosition={'top'}
    />
  );
}
