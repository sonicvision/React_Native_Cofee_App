import { StyleSheet } from "react-native";

export default StyleSheet.create({
  touchableOpacity: {
    height: 50,
    width: 200,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    borderRadius: 20,
    position: "absolute",
    bottom: 40
  },
  view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  },
  topText: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 80,
    fontSize: 30,
    fontStyle: "italic"
  }
});
