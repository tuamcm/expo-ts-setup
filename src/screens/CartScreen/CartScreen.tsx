import { View, ListRenderItem, FlatList } from "react-native";
import React, { useState } from "react";
import { ICart } from "services/db";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";
import { useAppSelector } from "app/hooks";
import { homeState } from "screens/HomeScreen/HomeSlice";
import {
  Box,
  Text,
  Center,
  HStack,
  Stack,
  Image,
  AspectRatio,
  VStack,
  Button,
  Modal,
} from "native-base";
import { IMAGES_SHOES } from "../../../assets/images";
import CartQuantityItem from "layout/CartQuantityItem/CartQuantityItem";

const CartScreen = () => {
  const { cart }: HomeInterface = useAppSelector<HomeInterface>(homeState);
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
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
            No Product Found
          </Text>
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
            Please choose product!
          </Text>
        </Center>
      </Box>
    );
  };

  const renderItem: ListRenderItem<ICart> = ({ item }) => {
    const { product, quantity } = item;
    return (
      <HStack bgColor={"white"} mt={"4"} mx={"4"} borderRadius={4}>
        <Stack w={"20%"} bgColor="#fff" borderRadius={4}>
          <AspectRatio ratio={10 / 10}>
            <Image
              source={IMAGES_SHOES[product.id]}
              alt={product.name}
              resizeMode="contain"
              resizeMethod="auto"
              width="100%"
              height="100%"
              borderRadius={4}
            />
          </AspectRatio>
        </Stack>
        <VStack w={"55%"} p={"2"}>
          <Text
            fontSize={20}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "black",
            }}
            fontWeight="500"
          >
            {product.name}
          </Text>
          <Text
            fontSize={16}
            _light={{
              color: "red.500",
            }}
            _dark={{
              color: "red.500",
            }}
            fontWeight="500"
          >
            ${product.price}.00
          </Text>
        </VStack>
        <Stack
          w={"25%"}
          py={"2"}
          justifyContent={"center"}
          alignItems={"flex-end"}
          pr="1"
        >
          <CartQuantityItem data={item} />
        </Stack>
      </HStack>
    );
  };

  const getTotalCart = () => {
    let totalCart = 0;
    cart.forEach((element) => {
      totalCart += element.quantity * element.product.price;
    });

    return totalCart;
  };

  return (
    <View style={{ backgroundColor: "#9ebeff", flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={({ product: { id } }: ICart) => id.toString()}
        ListEmptyComponent={renderViewEmpty}
      />
      {cart.length > 0 && (
        <HStack
          bgColor={"white"}
          m="4"
          p="2"
          justifyContent={"space-between"}
          alignItems="center"
          borderRadius={4}
        >
          <Stack w={"60%"}>
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
              Total:
            </Text>
            <Text
              fontSize={24}
              _light={{
                color: "pink.400",
              }}
              _dark={{
                color: "pink.400",
              }}
              fontWeight="500"
            >
              ${getTotalCart()}.00
            </Text>
          </Stack>
          <Stack>
            <Button size={"sm"} onPress={() => setOpen(true)}>
              Order Now
            </Button>
          </Stack>
        </HStack>
      )}
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350">
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>This feature is developing!</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              {/* <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button> */}
              <Button
                onPress={() => {
                  setOpen(false);
                }}
              >
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default CartScreen;
