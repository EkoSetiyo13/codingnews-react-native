import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';

export default StyleSheet.create({
  container: {
    width: wp('100%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    height: wp('40%'),
    width: wp('40%'),
    // marginBottom: hp('10%'),
  },
  topText: {
    paddingTop: hp('10%'),
    paddingBottom: hp('5%'),
    fontSize: theme.fontSize.h4,
    textAlign: 'center',
    width: wp("80%")
  },
  normalText: {
    paddingTop: hp('5%'),
    fontSize: theme.fontSize.h5,
    textAlign: 'center',
    width: wp("80%")
  },
  buttonView: {
    ...theme.style.versionBottom,
    alignItems: "center",
    width: "100%"
  }
});
