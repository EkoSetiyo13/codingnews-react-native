import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { limitString } from '@service/helpers/Util';


export default function NotificationCardComponent(props) {
    return (
        <TouchableOpacity activeOpacity={0.4} style={{ marginTop: 10, marginBottom: 10, width: '100%' }}>
            <Card style={{ height: 125, marginRight: 20, }}>

                <View style={styles.contentContainer}>
                    <View style={styles.imageView}>
                        <Image
                            resizeMode='cover'
                            source={require('@asset/icon/logo_laravel.jpg')}
                            style={styles.imageSize}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.titleText}>Cara Setting tanggal di Laravel </Text>
                        {/* <Text style={{ marginBottom: 5, marginTop: 5 }}>24-04-2022</Text> */}
                        <Text style={{ marginBottom: 5, marginTop: 5 }}>{limitString('Setting laravel secara general sebagai berikut .......', 50, true)}</Text>
                        <View style={styles.tagView}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Text>#Laravel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Text>#PHP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Text>#Datetime</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}
