import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import styles from './style';
import { HeaderComponent, EmptyExploreComponent, ExploreCardComponent } from '@component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { theme } from '@constant/themes';
import { Card } from 'react-native-paper';
import { makeArray } from '@service/helpers/Util';
import DropDown from "react-native-paper-dropdown";
import DropDownPicker from 'react-native-dropdown-picker';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ExploreScreen() {
  //STATE
  const [sumEplore, setSumExplore] = useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const arrayNews = makeArray(10);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState("");
  const [jenis, setJenis] = useState("");
  const [bahasa, setBahasa] = useState("");
  const [status, setStatus] = useState("");
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];
  const JenisList = [
    {
      label: "Semua",
      value: "semua",
    },
    {
      label: "Disukai",
      value: "disukai",
    },
    {
      label: "Disukai",
      value: "ditandai",
    },
  ];
  const BahasaList = [
    {
      label: "Java",
      value: "java",
    },
    {
      label: "Javascript",
      value: "javascript",
    },
  ];
  const StatusList = [
    {
      label: "Terbaru",
      value: "terupdate",
    },
    {
      label: "Terbaru",
      value: "terupdate",
    },
  ];
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  //HELPER REFRESH
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  //HELPER FLATLIST
  const keyExtractor = useCallback((item) => item.toString(), [])
  const renderItem = ({ item }) => (
    <ExploreCardComponent />
  );

  //CONDITION NO DATA
  if (sumEplore == 0) {
    return (<EmptyExploreComponent />)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent notif={true} />

      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ marginTop: 16 }}
        />
        <View style={styles.dropdownContainer}>
          <View style={styles.itemDropdown}>
            <DropDown
              label={"Semua"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={jenis}
              setValue={setJenis}
              list={JenisList}
            />
          </View>
          <View style={styles.itemDropdown}>
            <DropDown
              label={"Bahasa"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={bahasa}
              setValue={setBahasa}
              list={BahasaList}
            />
          </View>
          <View style={styles.itemDropdown}>
            <DropDown
              label={"Status"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={status}
              setValue={setStatus}
              list={StatusList}
            />
          </View>
        </View>


        <FlatList
          refreshControl={
            <RefreshControl
              colors={["#9Bd35A", "#689F38"]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          data={arrayNews}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        // Performance settings
        // removeClippedSubviews={true} // Unmount components when outside of window 
        // initialNumToRender={0} // Reduce initial render amount
        // maxToRenderPerBatch={20} // Reduce number in each render batch
        // updateCellsBatchingPeriod={100} // Increase time between renders
        // windowSize={7} // Reduce the window size
        />
      </View >
    </SafeAreaView>

  );
}
