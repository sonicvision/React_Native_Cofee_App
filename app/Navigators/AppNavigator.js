import Home from "../Containers/Home";
import OutletDetail from "../Containers/OutletDetail";

import { StackNavigator } from "react-navigation";

const StackApp = StackNavigator(
  {
    Home: { screen: Home },
    OutletDetail: { screen: OutletDetail }
  },
  {
    initialRouteName: "Home"
  }
);

export default StackApp;
