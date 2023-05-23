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
import styles from './style';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/button';
import Textinput from '../../components/textinput/index';
const Index = () => {
  const navigation = useNavigation();
  const handleForget = () => {
    navigation.navigate('Otp', {changeNavigation: 'Changepassword'});
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.imageBackground}
      resizeMode="cover">
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.tickContainer}>
        <Image
          source={require('../../../assets/images/emails.png')}
          style={styles.imageBackground}
        />
      </View>
      <View style={styles.emailcontainer}>
        <Text style={styles.textBold}>Confirm Your Email Address</Text>
        <Text style={styles.text}>We send confirmation email to: </Text>
        <Text style={styles.emailText}>Email@gmail.com</Text>
        <Text style={styles.checkemailtext}>
          Check your email and click on the confirmation link to continue.
        </Text>
      </View>
      <TouchableOpacity style={styles.loginContainer} onPress={handleForget}>
        <Button title={'GO TO EMAIL'} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Index;
