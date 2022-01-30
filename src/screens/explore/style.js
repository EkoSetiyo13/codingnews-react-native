import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';

export default StyleSheet.create({
  container: {
    // width: wp('100%'),
    // marginTop: wp("30%"),
    marginLeft: wp('2.5%'),
    marginRight: wp('2.5%'),
    marginBottom: wp("30%")
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  dropdownContainer: {
    // flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start' 
  },
  itemDropdown: {
    width: '33%', // is 50% of container width
    padding: 5
    // padding: 20
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
