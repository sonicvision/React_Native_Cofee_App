import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Styles/OutletDetailStyles";
import MapView from "react-native-maps";
import OutletMarker from "../Components/OutletMarker";

const OutletDetail = ({ navigation }) => {
  const outlet = navigation.state.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: outlet.image_url
        }}
      />
      <Text style={styles.name}>{outlet.name}</Text>
      <Text>{outlet.rating} Stars</Text>
      <Text>{outlet.review_count} Reviews</Text>
      <Text>Call {outlet.display_phone}</Text>
      <Text>{outlet.is_closed ? "CLOSED" : "OPEN"}</Text>
      <Text>Price: {String(outlet.price)}</Text>
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
    </View>
  );
};

export default OutletDetail;
