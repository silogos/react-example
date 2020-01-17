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

const DATA = {
  description: 'hepatitis A, hepatitis B, typhoid, rabies, meningitis, polio, measles, mumps and rubella (MMR), Tdap (tetanus, diphtheria and pertussis), chickenpox, shingles, pneumonia and influenza',
}

export default function VisaScreen() {
  const [country, setCountry] = useState('Cameroon');
  const [visitCountry, setVisitCountry] = useState('UK');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.header}>
            <Button title={'Visas'} />
          </View>  
          <View style={styles.row}>
            <TextInput 
              label={'Nationality'} 
              value={country} 
              onChangeText={(text) => setCountry(text)} 
              style={{ color: 'red', textAlign: 'center' }}
            />
          </View>
          <View style={styles.row}>
            <TextInput 
              label={'Visiting'} 
              value={visitCountry} 
              onChangeText={(text) => setVisitCountry(text)} 
              style={{ color: 'red', textAlign: 'center' }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.textDesc} >Visa Required</Text>
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
    color: '#000',
    textAlign: 'center'
  } 
});