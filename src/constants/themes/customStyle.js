import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const customStyle = {
  bottomScreen: {
    position: 'absolute',
    bottom: hp('2.5%'),
    padding: hp('2.5%'),
  },
  topScreen: {
    position: 'absolute',
    top: 0,
    padding: hp('2.5%'),
  },
  centerContainer: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding5: {
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
  },
};
