import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors/Colors';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: 'screen1',
    title: 'Welcome to My App',
    text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: require('../../../assets/images/savingmoney.png'),
    image: require('../../../assets/images/notime.png'),
    gradient: [COLORS.gradientLight, COLORS.gradientDark],
    background: require('../../../assets/images/circles.png'),
  },
  {
    key: 'screen2',
    title: 'Explore the Features',
    text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: require('../../../assets/images/savingmoney.png'),
    gradient: [COLORS.gradientLight, COLORS.gradientDark],
    background: require('../../../assets/images/circles.png'),
  },
  {
    key: 'screen3',
    title: 'Get Started',
    text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    image: require('../../../assets/images/savingmoney.png'),
    image: require('../../../assets/images/investment.png'),
    gradient: [COLORS.gradientLight, COLORS.gradientDark],
    background: require('../../../assets/images/circles.png'),
  },
];

const Index = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <LinearGradient colors={item.gradient} style={styles.slide}>
      <StatusBar backgroundColor={COLORS.gradientLight} />
      <ImageBackground
        source={item.background}
        style={styles.imageBackground}
        imageStyle={styles.backgroundImage}>
        <View style={{flex: 1, marginTop: 50}}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
  const renderDoneButton = () => {
    return (
      <View style={[styles.button, {backgroundColor: COLORS.navyblue}]}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };
  const onDone = () => {
    // Logic to handle when the user finishes the intro slides
    navigation.navigate("Login")
  };
  const renderNextButton = () => {
    return (
      <View style={[styles.button, {backgroundColor: COLORS.navyblue}]}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      dotStyle={{backgroundColor: COLORS.navyblue}}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      keyExtractor={item => item.key} // Add keyExtractor prop
    />
  );
};

export default Index;
