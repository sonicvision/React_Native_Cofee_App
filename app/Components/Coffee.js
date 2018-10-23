import React from "react";
import { FlatList, ActivityIndicator } from "react-native";
import CoffeeOutlet from "./CoffeeOutlet";

const Coffee = ({ isLoading, outlets }) =>
  isLoading ? (
    <ActivityIndicator size="large" color="#774023" />
  ) : (
    <FlatList
      data={outlets}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CoffeeOutlet outlet={item} />}
    />
  );

export default Coffee;
