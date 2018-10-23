import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{outlet.name}</Text>

      <View style={styles.innerView}>
        <Text style={styles.review}>{outlet.review_count} Reviews</Text>
        <Text style={styles.rating}>
          {outlet.rating + " "}
          <Icon name="star" size={20} color="#d7a05b" />
        </Text>
      </View>
      {outlet.is_closed ? (
        <Text style={styles.open}>CLOSED</Text>
      ) : (
        <Text style={styles.open}>OPEN</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default CoffeeOutlet;
