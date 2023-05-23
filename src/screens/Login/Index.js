import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import styles from './Style';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Textinput from '../../components/textinput/index';
import Button from '../../components/button';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [iconhide, seticonhide] = useState(
    require('../../../assets/images/hidden.png'),
  );
  const navigation = useNavigation();
  const hideShow = () => {
    if (visible) {
      setVisible(false);
      seticonhide(require('../../../assets/images/hidden.png'));
    } else {
      setVisible(true);
      seticonhide(require('../../../assets/images/view.png'));
    }
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logoimage}
        />
      </View>
      <View style={styles.loginText}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.back}>Back</Text>
        <Text style={styles.loginAccount}>Login To Your Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.username}>
          <Textinput
            icon={require('../../../assets/images/email.png')}
            placeholder="E-mail or Phone:"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View style={styles.password}>
        <Textinput
            icon={require('../../../assets/images/lock.png')}
            placeholder={"Password"}
            secureTextEntry={visible}
            onChangeText={text => console.log(text)}
          />
          <TouchableOpacity
            onPress={() => hideShow()}
            style={styles.hideshowContainer}>
            <Image source={iconhide} style={styles.hideimage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.forgetContainer}
          onPress={() => navigation.navigate('Forget')}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </TouchableOpacity>
        <Button title={'LOGIN'} />
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomContainerText}>Don't have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.bottomContainerTextBold}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;
