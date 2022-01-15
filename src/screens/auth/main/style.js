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
    alignItems: 'center',
  },
  imageSize: {
    height: wp('40%'),
    width: wp('40%'),
    marginTop: hp('10%')
  },
  welcomeText: {
    fontSize: hp('2%'),
    fontWeight: '900',
    color: theme.color.primary,
    marginTop: hp('2.5%')
  },
  contentView: {
    width: wp('90%'),
    marginTop: hp('10%'),
  }
});
