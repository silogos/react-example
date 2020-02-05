import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Linking
} from 'react-native';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';
import Button from '../../component/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from '../../styles';

const DATA = {
  numberEmergency: '+85227656700',
  urlForm: 'http://aimviva.com/wp-content/uploads/2018/11/Claim-Form.pdf'
}

export default function MemberAreaScreen() {
  function deepLink(link) {
    Linking.openURL(link)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.row}>
            <Text style={Styles.fontDisplay1} >Welcome Fahim</Text>
          </View>  
          <View style={styles.row}>
            <Text style={Styles.fontTitle1} >{`Member Number\nQ316180T-015`}</Text>
          </View>  
          <View style={styles.row}>
            <Text style={Styles.fontTitle1} >{`Valid from\nDec 16 2019 – Dec 15 2020`}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => deepLink(`tel:${DATA.numberEmergency}`)}>
              <View style={styles.buttonEmergency} >
                <Text style={styles.buttonEmergencyText} >{`Emergency Enquiry`}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={Styles.fontTitle1} >{`Policy Number\nQ316180T`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={Styles.fontTitle1} >{`Policy Owner\nHong Kong Wellness Ltd`}</Text>
          </View>
          <View style={styles.row}>
            <Button title={'Claim Form'} onPress={() => deepLink(DATA.urlForm)} />
          </View>  
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
  },
  textDesc: {
    fontSize: wp(6),
    color: '#000'
  },
  buttonEmergency: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 5,
    borderColor: '#FFF',
    elevation: 1
  },
  buttonEmergencyText: {
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '700'
  }
});