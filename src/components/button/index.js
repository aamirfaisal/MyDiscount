import { TouchableOpacity, Text, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../theme/Colors/Colors';
import styles from './style';
const index = ({ title}) => {
    return (
      <LinearGradient
        colors={[COLORS.buttongradientDark, COLORS.buttongradientLight]}
        style={styles.linearGradient}
      >
          <Text style={styles.loginContainerText}>{title}</Text>
      </LinearGradient>
    );
  };

export default index

