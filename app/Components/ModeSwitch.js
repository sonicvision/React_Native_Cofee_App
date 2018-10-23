import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles/ModeSwitchStyles";

const ModeSwitch = ({ displayModeChanged, isMapModeSelected }) => (
  <TouchableOpacity style={styles.button} onPress={() => displayModeChanged()}>
    <Icon
      style={{ flex: 1 }}
      name={isMapModeSelected ? "list" : "map"}
      size={30}
      color="#900"
    />
  </TouchableOpacity>
);

export default ModeSwitch;
