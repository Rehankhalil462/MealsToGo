import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, View } from "react-native";
import { RestaurantInfoCard } from "../restaurants/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
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
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
