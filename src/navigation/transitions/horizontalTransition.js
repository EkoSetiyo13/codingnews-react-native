import {Easing} from 'react-native';
import {TransitionSpecs, CardStyleInterpolators} from '@react-navigation/stack';

export const horizontalTransition = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 500,
        easing: Easing.linier,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 500,
        easing: Easing.linier,
      },
    },
  },
};
