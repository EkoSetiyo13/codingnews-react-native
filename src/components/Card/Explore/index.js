import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image } from 'react-native';
import { Card, } from 'react-native-paper';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { limitString } from '@service/helpers/Util';


export default function ExploreCardComponent(props) {
    return (
        <TouchableOpacity activeOpacity={0.4} style={{ marginTop: 10, marginBottom: 10, width: '100%' }}>
            <Card style={{ height: 125 }}>
                <Card.Content>
                    <Text style={styles.titleText}>Click Me</Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}
