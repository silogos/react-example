import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import firebase from "react-native-firebase"
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('MemberArea'))
      .catch(error => console.log({ errorMessage: error.message }))
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user && navigation.navigate("MemberArea")
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.row}>
            <TextInput label={'Email'} value={email} onChangeText={(text) => setEmail(text)} />
          </View>
          <View style={styles.row}>
            <TextInput label={'Password'} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
          </View>

          <Button onPress={handleLogin} title={'Submit'} />

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  row: {
    marginVertical: 15
  }
});