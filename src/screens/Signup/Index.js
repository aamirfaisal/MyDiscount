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
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button/index';
import Textinput from '../../components/textinput/index';
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
        <Text style={styles.loginAccount}>Create your Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.username}>
          <Textinput
            icon={require('../../../assets/images/user.png')}
            placeholder={'Username'}
          />
        </View>
        <View style={styles.email}>
          <Textinput
            icon={require('../../../assets/images/email.png')}
            placeholder={'Email or Phone'}
          />
        </View>
        <View style={styles.password}>
          <Textinput
            icon={require('../../../assets/images/lock.png')}
            placeholder={'Password'}
            secureTextEntry={visible}
          />
          <TouchableOpacity
            onPress={() => hideShow()}
            style={styles.hideshowContainer}>
            <Image source={iconhide} style={styles.hideimage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate("Otp",{changeNavigation:"Termcondition"})}>
          <Button title={'Register'}></Button>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomContainerText}>Don't have account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.bottomContainerTextBold}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;
