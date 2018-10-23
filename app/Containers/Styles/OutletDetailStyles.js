import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 },
    padding: 10
  },
  image: {
    height: 250,
    flexDirection: "row",
    marginBottom: -30
  },
  name: {
    flexDirection: "row",
    textAlign: "left",
    color: "white",
    padding: 5,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8
  },
  mapView: {
    height: 200
  }
});

export default styles;
