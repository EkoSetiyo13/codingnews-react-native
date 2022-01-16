import React, { useState } from 'react';
import { Drawer } from 'react-native-paper';
import { Button, View, Text, TouchableOpacity } from 'react-native';

export default function DrawerContainer({ navigation }) {
    const [active, setActive] = useState('');

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Text>Naivgate to notifications</Text>
            </TouchableOpacity>
            <Drawer.Item
                style={{ backgroundColor: '#64ffda' }}
                icon="star"
                label="First Item"
            />
            <Drawer.Item
                label="First Item"
                active={active === 'first'}
                onPress={() => setActive('first')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </View>
    );
};

