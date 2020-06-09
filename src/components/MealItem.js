import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native'
import themes from '../../themes/themes'

const MealItem = ({ title, duration, complexity, affordability, image, onSelectMeal }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onSelectMeal()}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.imgTitle} numberOfLines={1}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.detail }}>
            <Text style={styles.bold}>{duration} min</Text>
            <Text style={styles.bold}>{complexity.toUpperCase()}</Text>
            <Text style={styles.bold}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: '100%',
    backgroundColor: themes.primary,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 8
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: '#00000070',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  imgTitle: {
    fontSize: 14,
    fontFamily: 'muli-bold',
    color: 'white',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    height: '80%',
  },
  detail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%'
  },
  bold: {
    fontFamily: 'muli-bold'
  }
})

export default MealItem