import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "navigation/configs/navi";
import { useNavigation } from "@react-navigation/native";
import { CartScreenNavigationProp } from "navigation/MainTabScreens/TabTypes";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";
import { homeState } from "screens/HomeScreen/HomeSlice";
import { useAppSelector } from "app/hooks";
import { Badge, Button, VStack } from "native-base";

const CartIcon = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();
  const { cart }: HomeInterface = useAppSelector<HomeInterface>(homeState);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.quantity;
    });

    return total;
  };

  return (
    <VStack mr={"1"}>
      {cart.length > 0 && (
        <Badge
          colorScheme="cyan"
          rounded="full"
          mb={-4}
          mr={-3}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 11,
          }}
        >
          {getTotalQuantity()}
        </Badge>
      )}
      <Button p="1" bg="white" onPress={() => navigation.navigate("Cart")}>
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color={colors.active}
        />
      </Button>
    </VStack>
  );
};

export default CartIcon;
