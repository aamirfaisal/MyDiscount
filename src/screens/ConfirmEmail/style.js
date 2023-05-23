import {StyleSheet, ImageBackground} from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 24,
    marginTop: '15%',
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
  loginContainer: {
    alignSelf: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  tickContainer: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13%',
  },
  emailcontainer: {
    borderWidth:1,
    height:"25%",
  },
  text: {
    color: COLORS.white,
    fontSize:16,
    fontWeight:'500',
    lineHeight:19,
    alignSelf:'center',
},
textBold: {
      alignSelf:'center',
      color: COLORS.white,
      fontSize:22,
      fontWeight:'700',
      lineHeight:27,
    },
    emailText:{
      alignSelf:'center',
      color:'white',
      fontSize:18,
      fontWeight:'600',
      lineHeight:19,
    },
    checkemailtext:{
      alignSelf:'center',
    fontSize:16,
    color:'white',
    lineHeight:19,
    fontWeight:'500',
  }

});
export default styles;
