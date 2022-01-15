import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { theme } from '@constant/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    paddingTop: hp('5%'),
    fontSize: hp('2.5%'),
    fontWeight: '900',
    textAlign: 'center'
  },
  descriptionText: {
    paddingTop: hp('2.5%'),
    fontSize: hp('1.5%'),
    textAlign: 'justify',
    marginLeft: wp('8%'),
    marginRight: wp('8%'),
  },
  scrollviewContainer: {
    flexGrow: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 120
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 0,
    backgroundColor: theme.color.white
  },


});
