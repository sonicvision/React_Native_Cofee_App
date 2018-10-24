import LaunchScreen from "../Containers/LaunchScreen";
import TabNavigator from "./TabNavigator";

import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    TabNavigator: { screen: TabNavigator }
  },
  {
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      header: null
    }
  }
);

export default AppNavigator;
