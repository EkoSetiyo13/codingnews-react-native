import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';

export default StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: theme.color.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.white,
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  imageSize: {
    height: wp('50%'),
    width: wp('50%'),
    marginBottom: hp('10%'),
  },
  text: {
    color: theme.color.primary,
    textAlign: 'center',
    marginTop: hp('2%'),
    textAlign: 'center',
    marginLeft: wp('10%'),
    marginRight: wp('10%'),
  },
  title: {
    fontSize: 22,
    color: theme.color.primary,
    marginTop: hp('2%'),
    textAlign: 'center',
  },
  activeDot: {
    backgroundColor: theme.color.primary,
  }
});
