import {Easing} from 'react-native';
import {TransitionSpecs, CardStyleInterpolators} from '@react-navigation/stack';

export const revealTransition = {
  cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 1000,
        easing: Easing.linier,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 1000,
        easing: Easing.linier,
      },
    },
  },
};
