import Coffee from "../Containers/Coffee";

import { StackNavigator } from "react-navigation";

const StackApp = StackNavigator(
  {
    Coffee: { screen: Coffee }
  },
  {
    initialRouteName: "Coffee"
  }
);

export default StackApp;
