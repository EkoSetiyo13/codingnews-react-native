import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';

export default StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
