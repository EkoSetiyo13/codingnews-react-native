import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {List} from 'react-native-paper';
import styles from './style';
import {useOrientation} from '@service';

export default function PHPLanguageScreen() {
  const orientation = useOrientation();
  console.log(orientation);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Item
          title="First Item"
          description="First Item"
          right={props => <Text style={styles.itemLeft}>{Date.now()}</Text>}
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
    </View>
  );
}
