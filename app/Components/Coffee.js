import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import CoffeeOutlet from "./CoffeeOutlet";

const Coffee = ({ isLoading, outlets, navigation }) =>
  isLoading ? (
    <ActivityIndicator size="large" color="#774023" />
  ) : (
    <FlatList
      data={outlets}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CoffeeOutlet outlet={item} navigation={navigation} />
      )}
    />
  );

export default Coffee;
