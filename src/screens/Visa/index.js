import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Linking
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../../libraries/Responsive';
import AutoComplete from '../../component/AutoComplete';
import Button from '../../component/Button';

const iVisaImage = require('../../assets/ivisaimage.jpg') 
const CountriesData = require('../../assets/Countries.json')
const typesVisa = {
  u: "Customs union (e.g. Schengen Zone)",
  f: "Visa not required",
  e: "Electronic visa required (e.g. ESTA, ETA)",
  o: "Visa getting obtained online",
  a: "Visa on arrival",
  r: "Visa required",
  d: "Visa refused (e.g.Iran visa for citizens of Israel)"
}

export default function VisaScreen() {
  const [searchCountry, setSearchCountry] = useState('');
  const [country, setCountry] = useState(null);

  const [dataVisitCountry, setDataVisitCountry] = useState([]);
  const [searchVisitCountry, setSearchVisitCountry] = useState('');
  const [visitCountry, setVisitCountry] = useState(null);
  
  let filterDataCountry = CountriesData.filter((item) => {
    return item.name.common.toLowerCase().search(searchCountry.toLowerCase()) === -1 ? false : true
  })
  
  let filterDataVisitCountry = dataVisitCountry.filter((item) => {
    return item.name.common.toLowerCase().search(searchVisitCountry.toLowerCase()) === -1 ? false : true
  }) 
  console.log({ filterDataVisitCountry })


  const onSelectVountry = (item) => {
    setCountry(item)
    setSearchCountry(item.name.common)
  }
  
  const onSelectVisitCountry = (item) => {
    setVisitCountry(item)
    setSearchVisitCountry(item.name.common)
  }

  function goToWebsite(link) {
    Linking.openURL(link)
  }
  
  useEffect(() => {
    if(country) {
      let url = `https://raw.githubusercontent.com/herrjemand/visas/master/data/visa/${country.cca2}.visa.json`
      axios.get(url).then((res) => {     
        let tmp = []
        CountriesData.forEach((item) => {
          let requirements = res.data.requirements
          let findIdx = Object.keys(requirements).findIndex((e) => {
            return e === item.cca2
          }) 

          if(findIdx !== -1){
            item.requirements = requirements[Object.keys(requirements)[findIdx]]
            tmp.push(item)
          }
        })

        console.log({res, tmp})
        setDataVisitCountry(tmp)
      })
    }
  }, [country])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>    
          <View style={styles.header}>
            <Button title={'Visas'} />
          </View>  
          <View style={styles.row}>
            <AutoComplete 
              label={'Country'} 
              value={country && country.name.common} 
              defaultValue={searchCountry} 
              onChangeText={(text) => {
                setCountry(null)
                setSearchCountry(text)
                setVisitCountry(null)
                setSearchVisitCountry('')
              }}
              style={{ textAlign: 'center' }}
              data={filterDataCountry}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => onSelectVountry(item)}>
                    <View style={{ padding: wp(2) }}>
                      <Text style={styles.textLabel}>{item.name.common}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={styles.row}>
            <AutoComplete 
              label={'Visiting'} 
              value={visitCountry && visitCountry.name.common} 
              defaultValue={searchVisitCountry} 
              onChangeText={(text) => {
                setVisitCountry(null)
                setSearchVisitCountry(text)
              }}
              style={{ textAlign: 'center' }}
              data={filterDataVisitCountry}
              editable={Boolean(country)}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => onSelectVisitCountry(item)}>
                    <View style={{ padding: wp(2) }}>
                      <Text style={styles.textLabel}>{item.name.common}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.textDesc} >{visitCountry && typesVisa[visitCountry.requirements.type]}</Text>
          </View>  
          <View style={[styles.row, {marginTop: 100}]}>
            <Text style={styles.textDesc} >"Note: 2017 data, visa may have changed"</Text>
          </View>  
          <View style={styles.row}>
            <Text style={styles.textDesc} >You can visit: </Text>
          </View>  
          <View style={[styles.row, { alignItems: 'center' }]}>
            <TouchableOpacity onPress={() => goToWebsite('http://bit.ly/aimvisa')} >
              <Image source={iVisaImage} style={styles.image} />
            </TouchableOpacity>
          </View>  
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(10),
    minHeight: Dimensions.get('window').height
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
  },
  image: {
    height: wp(70),
  }
});