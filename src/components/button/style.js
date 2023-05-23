import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 24,
    marginTop: '15%',
    width: 201,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainerText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '26%',
  },
  bottomContainerText: {
    color: COLORS.white,
  },
  bottomContainerTextBold: {
    marginLeft: 5,
    fontWeight: '700',
    color: COLORS.white,
  },
});

export default styles;
