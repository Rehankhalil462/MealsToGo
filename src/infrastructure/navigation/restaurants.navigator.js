import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsScreen } from "../../features/screens/restaurants.screen";
const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
