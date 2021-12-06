import {Easing} from 'react-native';
import {
  TransitionSpecs,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

export const centerTransition = {
  ...TransitionPresets.ScaleFromCenterAndroid,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 1500,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 1500,
      },
    },
  },
};
