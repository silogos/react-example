import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AutoComplete from '../../component/AutoComplete';
import { Styles } from '../../styles';
const VaccinesData = require('../../assets/Vaccines.json')

export default function VaccinesScreen() {
  const [searchCountry, setSearchCountry] = useState('');
  const [country, setCountry] = useState(null);
  const _filter = ((data, func) => {
    return data.filter(func)
  })
  let dataCountry = _filter(VaccinesData, (item) => {
    return item.country.toLowerCase().search(searchCountry.toLowerCase()) === -1 ? false : true
  })

  const onSelected = (item) => {
    setCountry(item)
    setSearchCountry(item.country)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView  style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ minHeight: Dimensions.get('window').height - 23 }}>
          <View style={styles.container}> 
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
                data={dataCountry}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity onPress={() => onSelected(item)}>
                      <View style={{ padding: 10 }}>
                        <Text style={Styles.fontBody1}>{item.country}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
            <View style={styles.row}>
              <Text style={Styles.fontBody1} >{Boolean(country) && country.data}</Text>
            </View>  
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
  } 
});