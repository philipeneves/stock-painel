import React from 'react'

import {
  Touchable,
  Title
} from './styles'


const Button = ({ title, onPress, bgColor, borderColor, fontColor }) => {
  return (
    <Touchable
      activeOpacity={0.7}
      bgColor={bgColor}
      borderColor={borderColor}
      onPress={onPress}
    >
      <Title fontColor={fontColor}>{title}</Title>
    </Touchable>
  )
}

export default Button
