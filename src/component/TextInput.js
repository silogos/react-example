import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../libraries/Responsive';

export default CustomTextInput = ({ label, value, onChangeText, style, ...otherProps }) => {
  return (
    <View>
      <Text style={styles.textLabel} >{label}</Text>
      <View style={styles.textInput}>
        <TextInput style={[styles.textLabel, style]} onChangeText={onChangeText} value={value} {...otherProps} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: wp(6),
    color: '#000'
  },
  textInput: {
    paddingHorizontal: wp(3),
    borderRadius: hp(1.5),
    borderWidth: hp(.5),
    borderColor: '#FFF',
    elevation: 1
  }
});