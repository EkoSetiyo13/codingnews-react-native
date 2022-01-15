import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView } from 'react-native';
import styles from './style';
import { useIsFocused } from '@react-navigation/native';
import { Checkbox, Button } from 'react-native-paper';
import { theme } from '@constant/themes';

export default function RegulationScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // if (isFocused) {
    //   setTimeout(() => {
    //     navigation.replace('Bottom');
    //   }, 3000);
    // }
  }, []);

  const handleClickButton = () => {
    navigation.replace('SignIn');
  }

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollviewContainer}>
        <Text style={styles.titleText}> Tentang Aplikasi </Text>
        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

        <Text style={styles.descriptionText}>
          Aplikasi ini adalah sebuah aplikasi yang berfungis untuk blaaaa blaaaa  blaaa blaaaaaa blaaaaaa blaaaaaa blaaaaaablaaaaaa
        </Text>

      </ScrollView >
      <View style={styles.bottomContainer}>
        <Checkbox.Item
          label="Saya sudah membaca dan paham tentang aplikasi ini"
          status={isChecked ? 'checked' : 'unchecked'}
          position='leading'
          style={{ width: '100%' }}
          labelStyle={{ fontSize: 12, textAlign: 'left' }}
          color={theme.color.primary}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Button
          color={theme.color.white}
          mode='text'
          uppercase={false}
          onPress={handleClickButton}
          style={{
            backgroundColor: theme.color.primary,
          }}
          labelStyle={{ textAlign: 'center', }}
          disabled={isChecked ? false : true}
        >
          Paham!
        </Button>
      </View>
    </View>
  );
}
