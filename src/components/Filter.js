import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import themes from '../../themes/themes'

const Filter = ({ label, value, changeValue }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>{label}</Text>
      <Switch
        value={value}
        trackColor={{ true: themes.primary }}
        thumbColor={themes.primary}
        onValueChange={(newValue) => changeValue(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 32
  },
  filterText: {
    fontFamily: 'muli'
  }
})

export default Filter