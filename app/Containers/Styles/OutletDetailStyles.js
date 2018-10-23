import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    height: 250,
    flexDirection: "row",
    marginBottom: -30,
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 2 }
  },
  name: {
    flexDirection: "row",
    textAlign: "left",
    color: "white",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.8
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 5
  },
  mapView: {
    height: 250
  },
  review: {
    flex: 1,
    color: "brown",
    fontSize: 18
  },
  rating: {
    color: "#d7a05b",
    fontSize: 18,
    fontWeight: "bold",
    padding: 3
  },
  open: {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  closed: {
    backgroundColor: "red",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  price: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    color: "blue"
  },
  callView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#896038",
    borderRadius: 25,
    margin: 20
  },
  phoneNumber: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default styles;
