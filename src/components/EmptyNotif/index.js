import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '@constant/themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';


export default function EmptyNotifComponent(props) {
    const { onRefresh, refreshing, onLoading } = props;
    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <MaterialCommunityIcons
                    name={'bell'}
                    color={theme.color.primary}
                    size={100}
                />
                <Text style={styles.infoText}> Belum ada notifikasi unuk anda </Text>

                <Button style={styles.reloadButton} icon="reload" color="white" mode="contained" onPress={onLoading}>
                    Reload Halaman
                </Button>
            </ScrollView>
        </SafeAreaView >
    );
}
