import React, { useRef } from 'react';
import { Animated } from 'react-native';


export const fadeAnim = useRef(new Animated.Value(0)).current;

export const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
    }).start();
};

export const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true
    }).start();
};
