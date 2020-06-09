import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryCard = ({ onSelect, title, color }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.grid} onPress={() => onSelect()}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 12,
    height: 150
  },
  container: {
    flex: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 6
  },
  title: {
    fontFamily: 'muli-bold',
    fontSize: 16,
    textAlign: 'right'
  }
})

export default CategoryCard