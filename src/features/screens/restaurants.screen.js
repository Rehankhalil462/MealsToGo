import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, View, Pressable } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import styled from "styled-components";
import { RestaurantInfoCard } from "../restaurants/components/restaurant-info-card.component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { Search } from "../restaurants/components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            animating={true}
            style={{ marginLeft: -25 }}
            size={50}
            color={Colors.red800}
          />
        </View>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => navigation.navigate("RestaurantDetail")}
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
