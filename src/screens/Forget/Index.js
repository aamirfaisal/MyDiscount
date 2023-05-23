import {
    StyleSheet,
    TextInput,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar
  } from 'react-native';
  import styles from './Style';
  import { COLORS } from '../../theme/Colors/Colors';
  import {useNavigation} from '@react-navigation/native';
  import Button from '../../components/button'
    import Textinput from '../../components/textinput/index'
  const Index = () => {
        const navigation = useNavigation();
        const handleForget = ()=>{
          navigation.navigate("Otp",{changeNavigation:"Changepassword"})
        }
    return (
      <ImageBackground
        source={require('../../../assets/images/authbackground.png')}
        style={styles.imageBackground}
        resizeMode="cover">
          <StatusBar backgroundColor={COLORS.statusbarauth} />
          <View style={styles.loginText}>
            <Text style={styles.welcome}>Forgot</Text>
            <Text style={styles.welcome}>Your Password?</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <View style={styles.email}>
            <Textinput
            icon={require('../../../assets/images/user.png')}
            placeholder={'Username'}
          />
            </View>
            <TouchableOpacity style={styles.loginContainer} onPress={handleForget}>
            <Button title={"CONTINUE"}/>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  };
  
  export default Index;
  