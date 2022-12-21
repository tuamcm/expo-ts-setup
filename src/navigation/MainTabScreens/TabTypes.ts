import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { IProduct } from "services/db";

export type RootStackParamList = {
  Detail: { productItem: IProduct };
  Cart: undefined;
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;
export type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cart"
>;
export type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;
