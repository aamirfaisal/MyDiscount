import {StyleSheet, ImageBackground} from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';
const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
  },

  loginText: {
    marginTop: 50,
    marginLeft: '10%',
    marginTop: '30%',
  },
  welcome: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '700',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: 7,
  },
  image: {
    marginLeft: '4%',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  hideshowContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '4%',
  },
  hideimage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  userinput: {
    width: '90%',
    fontSize: 14,
    paddingLeft: 9,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    height: 42,
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: 7,
  },
  passwordinput: {
    width: '70%',
    fontSize: 14,
    paddingLeft: 9,
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
export default styles;
