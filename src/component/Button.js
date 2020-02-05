import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 5,
    borderColor: '#FFF',
    elevation: 1
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'
  }
});