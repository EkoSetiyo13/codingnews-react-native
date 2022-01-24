import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: theme.fontSize.h4,
    color: "#333333",
    marginTop: 10
  },
  reloadButton: {
    marginTop: 20
  }
});
