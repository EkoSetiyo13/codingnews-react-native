import React from 'react';
import { ActivityIndicator, } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SimpleLoadingComponent() {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={150} color="#0000ff" />
        </SafeAreaView>
    )
}
