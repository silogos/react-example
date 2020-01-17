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
import AutoComplete from '../../component/AutoComplete';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = require('../../assets/Countries.json')

export default function LoungeScreen() {
  const [searchAirport, setSearchAirport] = useState("");
  const [airport, setAirport] = useState(null);
  // const [searchAirport, setAirport] = useState("");
  const [terminal, setTerminal] = useState("Terminal 1");

  const _filter = ((data, func) => {
    return data.filter(func)
  })
  let dataAirport = _filter(DATA, (item) => {
    return item.name.common.toLowerCase().search(searchAirport.toLowerCase()) === -1 ? false : true
  })

  const onSelected = (item) => {
    setAirport(item)
    setSearchAirport(item.name.common)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.header}>
            <Button title={'Lounge Search'} />
          </View>  
          <View style={styles.row}>
            <AutoComplete 
              label={'Airport'} 
              value={airport && airport.name.common} 
              defaultValue={searchAirport} 
              onChangeText={(text) => {
                setAirport(null)
                setSearchAirport(text)
              }}
              style={{ textAlign: 'center' }}
              data={dataAirport}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => onSelected(item)}>
                    <View style={{ padding: wp(2) }}>
                      <Text style={styles.textLabel}>{item.name.common}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={styles.row}>
            <TextInput 
              label={'Terminal'} 
              value={terminal} 
              onChangeText={(text) => setTerminal(text)} 
              style={{ color: 'red', textAlign: 'center' }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.textDesc} >dsa</Text>
          </View>  
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(10),
    backgroundColor: '#FFF'
  },
  header: {
    paddingVertical: hp(3) 
  },
  row: {
    marginVertical: wp(2)
  },
  textLabel: {
    fontSize: wp(6),
    color: '#000'
  },
  textDesc: {
    fontSize: wp(6),
    color: '#000'
  } 
});