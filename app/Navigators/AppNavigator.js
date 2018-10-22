import Home from "../Containers/Home";

import { StackNavigator } from "react-navigation";

const StackApp = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home"
  }
);

export default StackApp;
