import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { closeSnack } from '../store/actions/snack.actions'

const CustomSnackbar = ({ message, duration = 7000, type }) => {
  const dispatch = useDispatch()
  const { status } = useSelector(({ snack }) => snack)

  const snackColor = () => {
    switch (type) {
      case 'success':
        return '#41D95D'
      case 'info':
        return '#368DFF'
      default:
        return '#F5D142'
    }
  }

  return (
    <View style={styles.container}>
      <Snackbar
        visible={status}
        duration={duration}
        onDismiss={() => dispatch(closeSnack())}
        style={{ backgroundColor: snackColor() }}
      >
        <Text style={{
          fontFamily: 'muli'
        }}
        >
          {message}
        </Text>
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 9999,
    marginBottom: 200
  }
})

export default CustomSnackbar