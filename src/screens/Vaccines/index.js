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
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';
import Button from '../../component/Button';
import TextInput from '../../component/TextInput';
import AutoComplete from '../../component/AutoComplete';
const VaccinesData = require('../../assets/Vaccines.json')

const DATA = {
  description: 'hepatitis A, hepatitis B, typhoid, rabies, meningitis, polio, measles, mumps and rubella (MMR), Tdap (tetanus, diphtheria and pertussis), chickenpox, shingles, pneumonia and influenza',
}

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
            <View style={styles.header}>
              <Button title={'Vaccines'} />
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
                data={dataCountry}
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
              <Text style={styles.textDesc} >{Boolean(country) && country.data}</Text>
            </View>  
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
  } 
});