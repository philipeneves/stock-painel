import React from "react";
import {
  Modal as ModalDefault,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/styles/colors";

import styles from "./styles";


export const Modal = ({
  height,
  close,
  animationType = "fade",
  children,
  ...rest
}) => {
  return (
    <ModalDefault
      {...rest}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={() => null}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.baseColor} />
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={close}
        />
        <View style={{ ...styles.container, height }}>{children}</View>
      </View>
    </ModalDefault>
  );
};
