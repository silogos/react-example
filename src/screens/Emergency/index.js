import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';
import AutoComplete from '../../component/AutoComplete';
const EmergencyNumbers = require('../../assets/EmergencyNumbers.json')

export default function EmergencyScreen() {
  const [searchCountry, setSearchCountry] = useState('');
  const [country, setCountry] = useState(null);
  const _filter = ((data, func) => {
    return data.filter(func)
  })
  let dataAirport = _filter(EmergencyNumbers, (item) => {
    return item.country.toLowerCase().search(searchCountry.toLowerCase()) === -1 ? false : true
  })

  const onSelected = (item) => {
    setCountry(item)
    setSearchCountry(item.country)
  }

  return (
    <SafeAreaView >
      <StatusBar barStyle="dark-content" />
      <View style={styles.container} >    
        <View style={styles.header}>
          <Button title={'Emergency'} />
        </View>  
        <View style={styles.row}>
          <AutoComplete 
            label={'Country'} 
            value={country && country.country} 
            defaultValue={searchCountry} 
            onChangeText={(text) => {
              setCountry(null)
              setSearchCountry(text)
            }}
            style={{ textAlign: 'center' }}
            data={dataAirport}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity onPress={() => onSelected(item)}>
                  <View style={{ padding: wp(2) }}>
                    <Text style={styles.textLabel}>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        <View style={styles.row}>
          {
            Boolean(country) && Object.keys(country.numbers).map((key) => {
              return (
                <View style={{ flexDirection: 'row', height: null }}>
                  <View style={{ flex: .5 }}>
                    <Text style={styles.textDesc} >{key}</Text>
                  </View>
                  <View style={{ flex: .5 }}>
                    <Text style={styles.textDesc} >{country.numbers[key] || "-"}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: wp(10)
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
  } 
});