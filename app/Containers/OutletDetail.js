import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import styles from "./Styles/OutletDetailStyles";
import MapView from "react-native-maps";
import OutletMarker from "../Components/OutletMarker";
import Icon from "react-native-vector-icons/FontAwesome";

const OutletDetail = ({ navigation }) => {
  const outlet = navigation.state.params;
  let scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2]
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: outlet.image_url
        }}
      />
      <Text style={styles.name}>{outlet.name}</Text>
      <View style={styles.innerView}>
        <Text style={styles.review}>{outlet.review_count} Reviews</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Text style={styles.rating}>
            {outlet.rating + " "}
            <Icon name="star" size={20} color="#d7a05b" />
          </Text>
        </View>
      </View>
      <Text style={styles.address}>
        <Icon name="map-pin" size={20} color="#d7a05b" />
        {outlet.location.display_address.map(item => ` ${item} `)}
      </Text>
      <View style={styles.innerView}>
        {outlet.is_closed ? (
          <Text style={styles.open}>CLOSED</Text>
        ) : (
          <Text style={styles.open}>OPEN</Text>
        )}
        <Text style={styles.price}>{String(outlet.price)}</Text>
      </View>
      <TouchableOpacity style={styles.callView}>
        <Icon name="phone" size={35} color="#896038" />
        <Text style={styles.phoneNumber}> Click to View</Text>
      </TouchableOpacity>
      <View pointerEvents="none">
        <MapView
          style={styles.mapView}
          initialRegion={{
            ...outlet.coordinates,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.0005
          }}
        >
          <OutletMarker outlet={outlet} />
        </MapView>
      </View>
    </ScrollView>
  );
};

export default OutletDetail;
