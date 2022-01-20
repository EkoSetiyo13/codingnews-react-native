import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default StyleSheet.create({
  scrollviewContainer: {
    // height: hp('100%'),
    width: wp('100%'),
    // backgroundColor: theme.color.white
  },
  versionText: {
    ...theme.style.bottomScreen,
    color: theme.color.primary,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  titleText: {
    fontSize: RFPercentage(1.8),
  },
  viewText: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
  },
  viewDonate: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    flexDirection: "row",
    // flex: 1,
    justifyContent: 'center'
  },
  textDonate: {
    fontSize: RFPercentage(1.5),
    marginRight: wp('2.5%'),
  },
  viewVertical: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center'
  }
});
