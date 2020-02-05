import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AutoComplete from '../../component/AutoComplete';
import { Styles } from '../../styles';
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
                  <View style={{ padding: 10 }}>
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
                <View style={{ flexDirection: 'row', height: null, width: 200, alignSelf: 'center' }}>
                  <View style={{ flex: .5 }}>
                    <Text style={Styles.fontTitle3} >{key}</Text>
                  </View>
                  <View style={{ flex: .5 }}>
                    <Text style={Styles.fontTitle3} >{country.numbers[key] || "-"}</Text>
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
    margin: 15
  },
  row: {
    marginVertical: 15
  } 
});