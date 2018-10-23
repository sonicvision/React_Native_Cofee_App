import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./Styles/ModeSwitchStyles";

const ModeSwitch = ({ displayModeChanged, isMapModeSelected }) => (
  <TouchableOpacity style={styles.button} onPress={() => displayModeChanged()}>
    <Icon name={isMapModeSelected ? "list" : "map"} size={30} color="white" />
  </TouchableOpacity>
);

export default ModeSwitch;
