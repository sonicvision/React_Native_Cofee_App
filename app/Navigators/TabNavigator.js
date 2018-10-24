import { createBottomTabNavigator } from "react-navigation";
import HomeNavigator from "./HomeNavigator";
import GalleryNavigator from "./GalleryNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export default createBottomTabNavigator(
  {
    Coffee: HomeNavigator,
    Gallery: GalleryNavigator
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Coffee") {
          iconName = "coffee";
        } else if (routeName === "Gallery") {
          iconName = "image";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />

          // <Ionicons
          //   name={iconName}
          //   size={horizontal ? 20 : 25}
          //   color={tintColor}
          // />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#896038",
      inactiveTintColor: "gray"
    }
  }
);
