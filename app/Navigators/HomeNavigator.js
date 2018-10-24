import Home from "../Containers/Home";
import OutletDetail from "../Containers/OutletDetail";

import { StackNavigator } from "react-navigation";

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    OutletDetail: { screen: OutletDetail }
  },
  {
    initialRouteName: "Home",
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

export default HomeNavigator;
