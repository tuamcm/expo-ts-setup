import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Badge,
  VStack,
  Button,
  IconButton,
  Pressable,
} from "native-base";
import { IMAGES_SHOES } from "../../../assets/images";
import { MaterialIcons } from "@expo/vector-icons";
import { IProduct } from "services/db";
import { useNavigation } from "@react-navigation/native";
import { DetailScreenNavigationProp } from "navigation/MainTabScreens/TabTypes";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";
import {
  HomeAddCart,
  HomeFulfilled,
  homeState,
} from "screens/HomeScreen/HomeSlice";

interface PropsData {
  data: IProduct;
}

const ProductItem = ({ data }: PropsData) => {
  const { id, name, type, price, inStock, uri, status } = data;
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { favorites }: HomeInterface = useAppSelector<HomeInterface>(homeState);

  return (
    <Box>
      <Box
        mx="5"
        my="5"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Detail", { productItem: data })}
          justifyContent="center"
        >
          <Box alignItems={"center"}>
            <AspectRatio ratio={10 / 10} height={"400"}>
              <Center>
                <Image
                  source={IMAGES_SHOES[id]}
                  alt={name}
                  resizeMode="contain"
                  resizeMethod="auto"
                />
              </Center>
            </AspectRatio>
          </Box>
        </Pressable>
        <HStack space={3} justifyContent="center">
          <VStack w="60%" rounded="md">
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Text
                  fontSize={18}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "black",
                  }}
                  fontWeight="700"
                >
                  {name}
                </Text>
              </Stack>
              <Text
                fontSize={24}
                _light={{
                  color: "red.500",
                }}
                _dark={{
                  color: "red.500",
                }}
                fontWeight="500"
              >
                {`$${price}.00`}
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Badge
                    colorScheme="warning"
                    variant="outline"
                    alignSelf="center"
                    mr={3}
                  >
                    {status}
                  </Badge>
                  <Badge variant="outline" alignSelf="center">
                    {type}
                  </Badge>
                </HStack>
              </HStack>
            </Stack>
          </VStack>
          <VStack
            w="40%"
            rounded="md"
            p={4}
            justifyContent="space-between"
            alignItems={"flex-end"}
          >
            <IconButton
              onPress={() => dispatch(HomeFulfilled(id))}
              size={10}
              variant={
                favorites && favorites.includes(id) ? "solid" : "outline"
              }
              colorScheme={"rose"}
              _icon={{
                as: MaterialIcons,
                name: "favorite-border",
              }}
            />
            {inStock ? (
              <Button
                bgColor="#5B9EE1"
                variant="solid"
                onPress={() =>
                  dispatch(HomeAddCart({ product: data, quantity: 1 }))
                }
              >
                Add Cart
              </Button>
            ) : (
              <Button bgColor="black" variant="ghost" isDisabled>
                Sold Out
              </Button>
            )}
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductItem;
