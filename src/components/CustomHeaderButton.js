import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { FontAwesome } from '@expo/vector-icons'

const CustomHeaderButton = ({ ...other }) => {
  return (
    <HeaderButton
      IconComponent={FontAwesome}
      iconSize={20}
      color={"#000"}
      {...other}
    />
  )
}

export default CustomHeaderButton