import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { theme } from '@constant/themes';
import { useNavigation } from '@react-navigation/native';

export default function HeaderComponent(props) {
    const { notif } = props;
    const navigation = useNavigation();

    const handleNotificationScreen = () => navigation.navigate('Base', { screen: 'Notif' });


    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: theme.color.primary, justifyContent: 'space-between' }}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            {notif && <Appbar.Action icon="bell" onPress={handleNotificationScreen} />}
        </Appbar.Header>
    );
};
