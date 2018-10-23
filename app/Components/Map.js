import React from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import OutletMarker from "./OutletMarker";
import styles from "../Containers/Styles/HomeStyles";
const Map = ({ outlets }) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 48.13837,
      longitude: 11.54618,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04
    }}
  >
    {outlets.map(outlet => (
      <OutletMarker outlet={outlet} />
    ))}
  </MapView>
);

export default Map;
