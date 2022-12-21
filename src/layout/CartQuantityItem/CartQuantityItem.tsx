import { StyleSheet } from "react-native";
import { Text, Center, HStack } from "native-base";
import { ICart } from "services/db";
import { useAppDispatch } from "app/hooks";
import {
  HomeCartQuantityIncrement,
  HomeCartQuantityDecrement,
} from "screens/HomeScreen/HomeSlice";
import { TouchableOpacity } from "react-native";

interface PropsData {
  data: ICart;
}

const CartQuantityItem = ({ data }: PropsData) => {
  const { quantity } = data;
  const dispatch = useAppDispatch();

  return (
    <HStack>
      <TouchableOpacity
        style={styles.btnQuantity}
        onPress={() => dispatch(HomeCartQuantityDecrement(data))}
      >
        <Text color="white" fontSize={20}>
          {"-"}
        </Text>
      </TouchableOpacity>
      <Center px={2} minW="10">
        <Text fontWeight={"bold"} color="orange.600" fontSize={18}>
          {quantity}
        </Text>
      </Center>
      <TouchableOpacity
        style={styles.btnQuantity}
        onPress={() => dispatch(HomeCartQuantityIncrement(data))}
      >
        <Text fontWeight={"bold"} color="white">
          {"+"}
        </Text>
      </TouchableOpacity>
    </HStack>
  );
};

const styles = StyleSheet.create({
  btnQuantity: {
    width: 35,
    height: 35,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default CartQuantityItem;
