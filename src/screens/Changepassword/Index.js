import {
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
import Button from '../../components/button';
import Textinput from '../../components/textinput/index';
const Index = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [iconhide, seticonhide] = useState(
    require('../../../assets/images/hidden.png'),
  );
  const [cvisible, csetVisible] = useState(false);
  const [ciconhide, cseticonhide] = useState(
    require('../../../assets/images/hidden.png'),
  );
  const hideShow = () => {
    if (visible) {
      setVisible(false);
      seticonhide(require('../../../assets/images/hidden.png'));
    } else {
      setVisible(true);
      seticonhide(require('../../../assets/images/view.png'));
    }
  };
  const chideShow = () => {
    if (cvisible) {
      csetVisible(false);
      cseticonhide(require('../../../assets/images/hidden.png'));
    } else {
      csetVisible(true);
      cseticonhide(require('../../../assets/images/view.png'));
    }
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.loginText}>
        <Text style={styles.welcome}>Change Password</Text>
      </View>
      <View style={styles.inputContainer}>
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
        <View style={styles.password}>
          <Textinput
            icon={require('../../../assets/images/lock.png')}
            placeholder={'Password'}
            secureTextEntry={cvisible}
            onChangeText={text => console.log(text)}
          />
          <TouchableOpacity
            onPress={() => chideShow()}
            style={styles.hideshowContainer}>
            <Image source={ciconhide} style={styles.hideimage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}>
          <Button title={'CONTINUE'} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Index;
