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
    padding: hp('10%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: {
    ...theme.style.bottomScreen,
    color: theme.color.primary,
    fontWeight: 'bold',
  },
  iconLogin: {
    position: 'absolute',
    left: wp('2%'),
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    height: '100%',
    width: '100%',
  },
  logo: {
    width: wp('30%'),
    height: wp('30%'),
  },
  textNoAuth: {
    paddingTop: hp('5%'),
  },
  buttonGoogle: {
    width: wp('60%'),
    height: hp('6%'),
  },
});
