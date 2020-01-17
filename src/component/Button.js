import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../libraries/Responsive';

export default Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress || (() => {})}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: hp(1),
    marginBottom: hp(2),
    borderRadius: hp(1.5),
    borderWidth: hp(.5),
    borderColor: '#FFF',
    elevation: 1
  },
  buttonText: {
    fontSize: wp(6),
    textAlign: 'center',
    color: '#FFF'
  }
});