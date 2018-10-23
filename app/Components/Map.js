import React from "react";
import MapView from "react-native-maps";
import OutletMarker from "./OutletMarker";
const Map = ({ outlets, navigation }) => (
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
      <OutletMarker outlet={outlet} navigation={navigation} />
    ))}
  </MapView>
);

export default Map;
