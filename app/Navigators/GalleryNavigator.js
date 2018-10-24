import Gallery from "../Containers/Gallery";

import { StackNavigator } from "react-navigation";

const GalleryNavigator = StackNavigator(
  {
    Gallery: { screen: Gallery }
  },
  {
    initialRouteName: "Gallery",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#896038"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default GalleryNavigator;
