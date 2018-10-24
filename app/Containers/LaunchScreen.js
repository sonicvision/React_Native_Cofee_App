import React from "react";
import { Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./Styles/LaunchScreenStyles";

const LaunchScreen = ({ navigation }) => (
  <ImageBackground
    style={styles.view}
    source={require("../Assets/coffee-home.jpg")}
  >
    <Text style={styles.topText}>Find your cup...</Text>
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => navigation.navigate("TabNavigator")}
    >
      <Text style={styles.text}>Go</Text>
    </TouchableOpacity>
  </ImageBackground>
);

export default LaunchScreen;
