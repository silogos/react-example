import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.header}>
            <Button title={'Log In'} />
          </View>  
          <View style={styles.row}>
            <TextInput label={'Email'} value={email} onChangeText={(text) => setEmail(text)} />
          </View>
          <View style={styles.row}>
            <TextInput label={'Password'} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(10)
  },
  header: {
    paddingVertical: hp(3) 
  },
  row: {
    marginVertical: wp(4)
  }
});