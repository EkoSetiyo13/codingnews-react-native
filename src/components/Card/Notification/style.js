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
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: theme.fontSize.h4,
    color: "#333333",
  },
  imageSize: {
    height: wp('17%'),
    width: wp('17%'),
  },
  tagView: {
    // flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    // left: 0,
    bottom: 0
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: wp('20%'),
    // marginRight: wp('1%'),
  },
  textView: {
    width: wp('70%'),
    height: 110,
  },
  titleText: {
    fontSize: theme.fontSize.h4,
    marginTop: 10
  }
});
