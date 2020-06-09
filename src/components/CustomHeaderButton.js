import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome5 } from '@expo/vector-icons'
import theme from '../../themes/themes'

const CustomHeaderButton = ({ ...other }) => {
  return (
    <HeaderButton
      IconComponent={FontAwesome5}
      iconSize={20}
      color={"#000"}
      {...other}
    />
  )
}

export default CustomHeaderButton