import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './style';

export default function ItemNewsComponent({
  item,
  navigation,
  onPress,
  backgroundColor,
  textColor,
}) {
  return (
    <TouchableOpacity
      id={item.id}
      onPress={() => navigation.push('FundamentalDetail', {data: item})}
      style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );
}
