import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  image: {
    height: 500,
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
  }
});

export default styles;
