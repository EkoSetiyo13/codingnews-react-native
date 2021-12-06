import {Easing} from 'react-native';
import {TransitionSpecs, CardStyleInterpolators} from '@react-navigation/stack';

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const fadeCenterTransition = {
  cardStyleInterpolator: forFade,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 1000,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 1000,
      },
    },
  },
};
