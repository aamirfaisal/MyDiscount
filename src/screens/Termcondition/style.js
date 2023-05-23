import {StyleSheet, } from 'react-native';
import {COLORS} from '../../theme/Colors/Colors';
const styles = StyleSheet.create({
  container: {},
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  tickContainer:{
    height:147,
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
    marginTop:"13%"
  },
  image:{
    height:147,
    width:147,
  },
  conditionContainer:{
    marginTop:"11%",
    marginLeft:"6%",
    marginRight:"4%",
},
termconditionText:{
    marginBottom:"6%",
    color:COLORS.white,
    fontSize:25,
    fontWeight:'700',
    lineHeight:39,
    
},
conditionDescription:{
      marginBottom:"6%",
    color:COLORS.white,
    lineHeight:19.81,
    fontSize:16,
    fontWeight:'700',
  },
  readfull:{
    color:COLORS.white,
    marginBottom:"7%",
    fontWeight:'700',
  },
  checkboxContainer:{
    flexDirection:'row',
    marginLeft:"6%",
  },
  checkboxText:{
    color:COLORS.white,
    marginLeft:"4%",
    fontWeight:'700',
  },
  checkboxWrapper: {
    borderColor: 'red',
    borderRadius: 5,
    padding: 2,
    marginRight: 10,
    marginBottom:3,
  },
  loginContainer:{
    color:"white",
    fontSize:16,
    lineHeight:19,
    fontWeight:'700',
    alignSelf:'center',
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
