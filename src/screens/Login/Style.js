import {StyleSheet, ImageBackground} from 'react-native';
import { COLORS } from '../../theme/Colors/Colors';
const styles = StyleSheet.create({
  container: {
  },
  imageBackground:{
    flex:1,
    resizeMode:'contain',
  },
  logo:{// Set the background color to white
    marginTop:"11%",
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    zIndex:2,
    width:'30%',
    alignSelf:'center',
  },
  logoimage:{
    width:78,
    height:68,
  },
  loginText:{
    marginTop:50,
    marginLeft:'10%',

  },
  welcome:{
    color:COLORS.white,
    fontSize:28,
    fontWeight:'700',
  },
  back:{
    color:COLORS.white,
    fontSize:30,
    fontWeight:'700',
  },
  loginAccount:{
    color:COLORS.white,
    fontSize:17,
    fontWeight:'600',
    letterSpacing:1,
  },
  inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:"13%",
  },
  username:{
    flexDirection:'row',
    alignItems:'center',
    height:42,
    width:'85%',
    backgroundColor:COLORS.white,
    borderRadius:7,
  },
  image: {
    marginLeft:"4%",
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  hideshowContainer:{
    flex:1,
    alignItems:'flex-start',
  },
  hideimage:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  password:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:"10%",
    height:42,
    width:'85%',
    backgroundColor:COLORS.white,
    borderRadius:7,
  },
  passwordinput:{
    width:'70%',
    fontSize:14,
    paddingLeft:9,
  },
  forgetContainer:{
    marginTop:'3%',
    width:'80%',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    lineHeight:17,
    
  },
  forgetText:{
    color:COLORS.white,
    fontSize:14,
    fontWeight:'600',
  },
  loginContainer:{
    width:201,
    height:47,
    justifyContent:'center',
    alignItems:'center',
    
  },
    linearGradient:{
      borderRadius:24,
      marginTop:'15%',
  },
  loginContainerText:{
    color:"white",
    fontSize:16,
    lineHeight:19,
    fontWeight:'700'
  },
  bottomContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    height:'26%',
  },
  bottomContainerText:{
    color:COLORS.white,
  },
  bottomContainerTextBold:{
    marginLeft:5,
    fontWeight:'700',
    color:COLORS.white,
  }
});
export default styles;
