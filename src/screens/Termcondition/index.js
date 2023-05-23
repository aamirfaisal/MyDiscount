import React, { useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { COLORS } from '../../theme/Colors/Colors';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'react-native-check-box';
import PropTypes from 'prop-types';

const TermsAndConditionsCheckbox = ({
  isChecked1,
  isChecked2,
  onCheckboxChange1,
  onCheckboxChange2,
}) => {
  return (
    <View>
      <View style={styles.checkboxContainer}>
        <View
          style={[
            styles.checkboxWrapper,
            { borderColor: isChecked1 ? 'green' : 'red' },
          ]}
        >
          <CheckBox
            style={styles.checkbox}
            onClick={() => onCheckboxChange1(!isChecked1)}
            isChecked={isChecked1}
            checkBoxColor={COLORS.white}
          />
        </View>
        <Text style={styles.checkboxText}>
          I agree with the Term and Conditions
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View
          style={[
            styles.checkboxWrapper,
            { borderColor: isChecked2 ? 'green' : 'red' },
          ]}
        >
          <CheckBox
            style={styles.checkbox}
            onClick={() => onCheckboxChange2(!isChecked2)}
            isChecked={isChecked2}
            checkBoxColor={COLORS.white}
          />
        </View>
        <Text style={styles.checkboxText}>
          I agree with Foree Privacy Policy
        </Text>
      </View>
    </View>
  );
};

TermsAndConditionsCheckbox.propTypes = {
  isChecked1: PropTypes.bool.isRequired,
  isChecked2: PropTypes.bool.isRequired,
  onCheckboxChange1: PropTypes.func.isRequired,
  onCheckboxChange2: PropTypes.func.isRequired,
};

const Index = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const navigation = useNavigation();

  const handleCheckboxChange1 = () => {
    setChecked1(!checked1);
  };

  const handleCheckboxChange2 = () => {
    setChecked2(!checked2);
  };

  const isBothChecked = checked1 && checked2;

  return (
    <ImageBackground
      source={require('../../../assets/images/authbackground.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <StatusBar backgroundColor={COLORS.statusbarauth} />
      <View style={styles.tickContainer}>
        <Image
          source={require('../../../assets/images/tickcircle.png')}
          style={styles.imageBackground}
        />
      </View>
      <View style={styles.conditionContainer}>
        <Text style={styles.termconditionText}>Term & Conditions</Text>
        <Text style={styles.conditionDescription}>
          The Customer agrees that Foree may use, process and/or host customer
          confidential information/data such as CNIC, Bank Account Number &
          other bank account credentials and Contact Number etc.).
        </Text>
        <Text style={styles.conditionDescription}>
          The Customer also agrees that Foree has the debit authority; Foree may
          debit money from customer account/wallet/card etc. for the processing
          of transactions.
        </Text>
        <Text style={styles.readfull}>Read full Terms & Conditions</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <TermsAndConditionsCheckbox
          isChecked1={checked1}
          isChecked2={checked2}
          onCheckboxChange1={handleCheckboxChange1}
          onCheckboxChange2={handleCheckboxChange2}
        />
      </View>
      <TouchableOpacity
        style={styles.loginContainer}
        activeOpacity={0.7}
        disabled={!isBothChecked}
        onPress={() => {
          if (isBothChecked) {
            // Perform the desired action
            navigation.navigate("Confirmemail")
          }
        }}
      >
        <LinearGradient
          colors={
            isBothChecked
              ? [COLORS.buttongradientDark, COLORS.buttongradientLight]
              : [COLORS.colorDisableLight,COLORS.colorDisableDark]
          }
          style={styles.linearGradient}
        >
          <Text style={styles.loginContainerText}>CONTINUE</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Index;
