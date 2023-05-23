import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button';
const Index = ({route}) => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const {changeNavigation} = route.params;
  // console.log(changeNavigation);
  const handleOtpChange = otp => {
    setOtp(otp);
  };

  const handleOtpSubmit = () => {
    // Handle OTP submission logic here
    console.log('OTP submitted:', otp);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.container}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.loginText}>
        <Text style={styles.welcome}>OTP</Text>
        <Text style={styles.loginAccount}>Please Enter your OTP</Text>
      </View>
      <OTPTextInput
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpInput}
        handleTextChange={handleOtpChange}
        inputCount={4}
        keyboardType="numeric"
      />
      <Text style={styles.infoText}>
        Please enter the OTP sent to your mobile number
      </Text>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate(changeNavigation)}>
        <Button title={'CONTINUE'} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 5,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
  },
  loginContainer: {
    borderRadius: 24,
    marginTop: '15%',
    width: 201,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  loginContainerText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
  },
  loginText: {
    marginTop: 50,
    marginLeft: '10%',
  },
  welcome: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '700',
  },
  loginAccount: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default Index;
