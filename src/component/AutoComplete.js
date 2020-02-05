import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '../libraries/Responsive';
import { Styles } from '../styles'

export default AutoComplete = ({ 
  label, value, defaultValue, onChangeText, style, data, renderItem, ...otherProps 
}) => {
  const [focus, setFocus] = useState(false);

  function _onChangeText(text){
    onChangeText && onChangeText(text)
  }

  return (
    <View>
      <Text style={[Styles.fontTitle3]} >{label}</Text>
      <View style={[
        styles.textInput, 
        { elevation: focus ? 3 : 1 }
      ]}>
        <TextInput 
          style={[
            Styles.fontTitle3, 
            style,
            { backgroundColor: '#fbfbfb', color: value ?  "red" : "#CCC" }
          ]} 
          onChangeText={_onChangeText} 
          value={value || defaultValue} 
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...otherProps}
        />
      </View>
      {
        focus && (
          <View style={[styles.list, { elevation: focus ? 3 : 1 }]}>
            <FlatList
              keyExtractor={(item) => item.cca2}
              data={data}
              ItemSeparatorComponent={() => <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#000' }} />}
              renderItem={renderItem}
            />
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: wp(6),
    color: '#000'
  },
  textInput: {
    // paddingHorizontal: 15,
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 5  ,
    borderColor: '#FFF',
    elevation: 3
  },
  list: {
    position: 'absolute',
    left: 0, 
    right: 0,
    top: 75,
    // paddingHorizontal: wp(3),
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#FFF',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 0,
    elevation: 3,
    zIndex: 1,
    maxHeight: 150
  }
});