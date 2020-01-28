import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
  BackHandler,
  ToastAndroid
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationActions } from 'react-navigation';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';

const MENU = [
  { title: 'Log In', link: 'LogIn', type: 'screen' },
  { title: 'Vaccines', link: 'Vaccines', type: 'screen' },
  { title: 'Visas', link: 'Visa', type: 'screen' },
  { title: 'Emergency', link: 'Emergency', type: 'screen' },
  { title: 'Lounge Search', link: 'Lounge', type: 'screen' },
  { title: 'Travel', link: 'http://bit.ly/Aimviva', type: 'website' },
  { title: 'Arrture', link: 'http://bit.ly/loungelink', type: 'website' },
  { title: 'Flexiroam', link: 'http://bit.ly/flexiroom  ', type: 'website' },
  { title: 'TraceMe', link: 'http://bit.ly/bagtagg', type: 'website' }
]

export default function HomeScreen({ navigation }) {
  let backToExit = false
  function handleBackButtonPressAndroid() {
    console.log({backToExit, navigation})
    if(backToExit) {
      return false
    }
    if (navigation.isFocused()) {
      backToExit = true
      ToastAndroid.show('Press back again to exit the app', ToastAndroid.SHORT);
      setTimeout(() => {
        backToExit = false
      }, 1000)
    }
    navigation.dispatch(NavigationActions.back())
    return true; 
  }

  function goToWebsite(link) {
    Linking.openURL(link)
  }

  function navigate(route) {
    navigation.push(route)
  }


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonPressAndroid);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPressAndroid);
  })

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={require('../../assets/logo.png')} />
          </View>
          {
            MENU.map((item) => (
              <TouchableOpacity onPress={() => item.type === 'website' ? goToWebsite(item.link) : navigate(item.link)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))
          }

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(10)
  },
  logo: {
    height: hp(14),
    marginVertical: hp(5)
  },
  logoImage: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null
  },
  button: {
    backgroundColor: 'green',
    padding: hp(1),
    marginBottom: hp(2),
    borderRadius: hp(.5),
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