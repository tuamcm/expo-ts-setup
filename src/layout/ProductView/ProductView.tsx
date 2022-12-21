import { View, FlatList, ListRenderItem } from "react-native";
import React from "react";
import { IProduct, TEST_DATA } from "services/db";
import ProductItem from "layout/ProductItem/ProductItem";
import {} from "react-native";

const ProductView = () => {
  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <ProductItem data={item} />
  );

  return (
    <View style={{backgroundColor: "#ffe6d6"}}>
      <FlatList
        data={TEST_DATA}
        renderItem={renderItem}
        keyExtractor={({ id }: IProduct) => id.toString()}
      />
    </View>
  );
};

export default ProductView;
