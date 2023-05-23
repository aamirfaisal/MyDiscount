import {StyleSheet, Text, View, Image,TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/Colors/Colors';
const index = ({icon, placeholder, secureTextEntry, value, onChangeText}) => {
  return (
    <>
      <Image
        source={icon}
        style={styles.image}
      />
      <TextInput
        style={styles.userinput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        placeholderTextColor="#B9A5D3"
      />
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13%',
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    width: '80%',
    backgroundColor: COLORS.white,
    borderRadius: 7,
    borderWidth:2,
  },
  image: {
    marginLeft: '4%',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  userinput: {
    width: '81%',
    fontSize: 14,
    paddingLeft: 17,
  },
});
