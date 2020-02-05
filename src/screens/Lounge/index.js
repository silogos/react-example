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
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import AutoComplete from '../../component/AutoComplete';
import { Styles } from '../../styles';
const DATA = require('../../assets/Countries.json')
const LOUNGES = require('../../assets/Lounge.json')
let COUNTRIES = DATA.filter((item) => {
  let exist = LOUNGES.findIndex((lounge) => lounge.countryCode === item.cca2) 
  return exist !== -1 ? true : false 
})

export default function LoungeScreen() {
  const [searchAirport, setSearchAirport] = useState("");
  const [airport, setAirport] = useState(null);
  const [searchTerminal, setSearchTerminal] = useState("");
  const [terminal, setTerminal] = useState(null);
  const [dataTerminal, setDataTerminal] = useState([])
  
  const DATA_AIRPORT = COUNTRIES.filter((item) => {
    return item.name.common.toLowerCase().search(searchAirport.toLowerCase()) === -1 ? false : true
  }) 
  const DATA_TERMINAL = dataTerminal.filter((item) => {
    return item.title.toLowerCase().search(searchTerminal.toLowerCase()) === -1 ? false : true
  }) 

  const onSelectAirport = (item) => {
    let dataTerminal = LOUNGES.filter((lounge) => {
      return lounge.countryCode === item.cca2
    })
    console.log({ onSelectAirport: item, dataTerminal })
    setAirport(item)
    setSearchAirport(item.name.common)
    setDataTerminal(dataTerminal)
  }
  const onSelectTerminal = (item) => {
    console.log({ setTerminal: item })
    setTerminal(item)
    setSearchTerminal(item.title)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.row}>
            <AutoComplete 
              label={'Airport'} 
              value={airport && airport.name.common} 
              defaultValue={searchAirport} 
              onChangeText={(text) => {
                setAirport(null)
                setSearchAirport(text)
                setTerminal(null)
                setSearchTerminal("")
              }}
              style={{ textAlign: 'center' }}
              data={DATA_AIRPORT}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => onSelectAirport(item)}>
                    <View style={{ padding: 10 }}>
                      <Text>{item.name.common}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={styles.row}>
            <AutoComplete 
              label={'Terminal'} 
              value={terminal && terminal.title} 
              defaultValue={searchTerminal} 
              onChangeText={(text) => {
                setTerminal(null)
                setSearchTerminal(text)
              }}
              style={{ textAlign: 'center' }}
              data={DATA_TERMINAL}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => onSelectTerminal(item)}>
                    <View style={{ padding: 10 }}>
                      <Text style={Styles.fontBody1}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>

          <FlatList 
            data={terminal ? terminal.terminals : []}
            renderItem={({ item }) => {

              return (
                <View style={{ marginVertical: 15, borderWidth: 1, borderColor: "#CCC", padding: 5 }}>
                  <Text style={[Styles.fontTitle3]} >{item.title}
                    <Text style={[Styles.fontCaption]} > ({item.costs})</Text>
                  </Text>
                  <Text style={[Styles.fontCaption]} >{item.time}</Text>
                  <Text style={[Styles.fontBody1]} >{item.features}</Text>
                  { 
                    item.contacts.map((item) => {
                      let contacts = Object.keys(item)
                      return contacts.map((contact) => (
                        <Text style={[Styles.fontCaption]} >{contact}: {item[contact]}</Text>
                      ))
                    })
                  }
                </View>
              )
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFF',
    minHeight: Dimensions.get('window').height
  },
  row: {
    marginVertical: 15
  }
});