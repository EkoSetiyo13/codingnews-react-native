import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, ActivityIndicator, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '@constant/themes';
import { EmptyNotifComponent, SimpleLoadingComponent, NotificationCardComponent } from '@component'
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeArray } from '@service/helpers/Util';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function AlredyRead() {
    const [refreshing, setRefreshing] = useState(false);
    const [sumNotif, setSumNotif] = useState(0);
    const [loading, setLoading] = useState(false);

    const arrayNews = makeArray(10);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        setSumNotif(20);
    }, []);

    const onLoading = useCallback(() => {
        setLoading(true);
        wait(2000).then(() => setLoading(false));
    }, []);

    useEffect(() => {
        setTimeout(() => { }, 2000)
    }, [])

    if (loading) {
        return (
            <SimpleLoadingComponent />
        )
    }


    if (sumNotif < 1 || typeof sumNotif === 'undefined') {
        return (
            <EmptyNotifComponent onRefresh={onRefresh} refreshing={refreshing} onLoading={onLoading} />
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {arrayNews.map((index, data) =>
                    <NotificationCardComponent key={index} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
