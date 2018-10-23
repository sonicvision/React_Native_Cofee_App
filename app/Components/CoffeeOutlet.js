import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./Styles/CoffeeOutletStyles";

const CoffeeOutlet = ({ outlet, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate("OutletDetail", outlet)}
  >
    <Image
      style={styles.image}
      source={{
        uri: outlet.image_url
      }}
    />
    <Text style={styles.name}>{outlet.name}</Text>
  </TouchableOpacity>
);

export default CoffeeOutlet;
