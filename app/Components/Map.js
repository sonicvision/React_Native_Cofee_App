import React from "react";
import MapView from "react-native-maps";
import OutletMarker from "./OutletMarker";
const Map = ({ outlets, navigation }) => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 48.13437,
      longitude: 11.55618,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }}
  >
    {outlets.map(outlet => (
      <OutletMarker outlet={outlet} key={outlet.id} navigation={navigation} />
    ))}
  </MapView>
);

export default Map;
