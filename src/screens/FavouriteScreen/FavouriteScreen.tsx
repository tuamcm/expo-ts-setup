import React from "react";
import { Box, Text, Center } from "native-base";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";
import { useAppSelector } from "app/hooks";
import { homeState } from "screens/HomeScreen/HomeSlice";
import { FlatList, ListRenderItem, View } from "react-native";
import { IProduct, TEST_DATA } from "services/db";
import ProductItem from "layout/ProductItem/ProductItem";

const FavouriteScreen = () => {
  const { favorites }: HomeInterface = useAppSelector<HomeInterface>(homeState);

  const getProductOfFavorites = () => {
    if (favorites) {
      const favoriteItems = TEST_DATA.filter(function (item, index, arr) {
        if (favorites.includes(item.id)) {
          return item;
        }
      });

      return favoriteItems;
    }

    return [];
  };

  const renderViewEmpty = () => {
    return (
      <Box justifyContent={"space-between"} alignItems={"center"} my="20">
        <Center>
          <Text
            fontSize={24}
            _light={{
              color: "coolGray.600",
            }}
            _dark={{
              color: "coolGray.600",
            }}
            fontWeight="500"
          >
            No Favorite Found
          </Text>
        </Center>
      </Box>
    );
  };

  const renderItem: ListRenderItem<IProduct> = ({ item }) => {
    return <ProductItem data={item} />;
  };

  return (
    <View style={{ backgroundColor: "#e5fff0", flex: 1 }}>
      <FlatList
        data={getProductOfFavorites()}
        renderItem={renderItem}
        keyExtractor={({ id }: IProduct) => id.toString()}
        ListEmptyComponent={renderViewEmpty}
      />
    </View>
  );
};

export default FavouriteScreen;
