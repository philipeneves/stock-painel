import React from 'react'
import {
  Modal as ModalComponent,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'

import styles from './styles'


export const Modal = ({
  height,
  close,
  animationType = 'fade',
  children,
  ...rest
}) => {
  return (
    <ModalComponent
      {...rest}
      animationType='slide'
      transparent
      statusBarTranslucent
      onRequestClose={() => null}
    >
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ ...styles.container, height }}>{children}</View>
        </TouchableWithoutFeedback>
      </View>
    </ModalComponent>
  )
}
