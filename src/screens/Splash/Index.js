import {View, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/Colors/Colors';
import {useNavigation} from '@react-navigation/native';
const Index = () => {
  const navigation = useNavigation();
  setTimeout(() => {
      navigation.navigate("Introslider")
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#331E4D" />
      <Image
        source={require('../../../assets/images/Splash.png')}
        style={styles.imageBackground}/>
    </View>
  );
};

export default Index;
