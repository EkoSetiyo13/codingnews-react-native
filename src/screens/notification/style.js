import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: wp('100%')
  },
  infoText: {
    fontSize: theme.fontSize.h4,
    color: "#333333",
  }
});
