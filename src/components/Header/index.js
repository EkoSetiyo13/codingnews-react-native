import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { theme } from '@constant/themes';
import { useNavigation } from '@react-navigation/native';

export default function HeaderComponent() {
    const navigation = useNavigation();

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: theme.color.primary, justifyContent: 'space-between' }}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Action icon="bell" onPress={_handleMore} />
        </Appbar.Header>
    );
};
