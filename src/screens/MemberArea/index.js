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
import TextInput from '../../component/TextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          <View style={styles.header}>
            <Button title={'Member Area'} />
          </View>  
          <View style={styles.row}>
            <Text style={styles.textDesc} >Welcome Fahim</Text>
          </View>  
          <View style={styles.row}>
            <Text style={styles.textDesc} >{`Member Number\nQ316180T-015`}</Text>
          </View>  
          <View style={styles.row}>
            <Text style={styles.textDesc} >{`Valid from\nDec 16 2019 – Dec 15 2020`}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => deepLink(`tel:${DATA.numberEmergency}`)}>
              <View style={styles.buttonEmergency} >
                <Text style={styles.buttonEmergencyText} >{`Emergency Enquiry`}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.textDesc} >{`Policy Number\nQ316180T`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textDesc} >{`Policy Owner\nHong Kong Wellness Ltd`}</Text>
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
    padding: wp(10)
  },
  header: {
    paddingVertical: hp(3) 
  },
  row: {
    marginVertical: wp(2)
  },
  textDesc: {
    fontSize: wp(6),
    color: '#000'
  },
  buttonEmergency: {
    backgroundColor: 'red',
    padding: hp(2),
    borderRadius: hp(1.5),
    elevation: 1
  },
  buttonEmergencyText: {
    fontSize: wp(6),
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '700'
  }
});