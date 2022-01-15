import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {theme} from '@constant/themes';

export default StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize :{
    height: wp('50%'),
    width: wp('50%'),
  },
  versionText: {
    ...theme.style.versionBottom,
    color: theme.color.primary,
    fontWeight: '900',
    fontSize: hp('1.5%'),
  },
  createByText: {
    ...theme.style.createByBottom,
    color: theme.color.primary,
    fontWeight: '900',
    fontSize: hp('1.5%'),
  },
});
