import { View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
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
  ScrollView,
} from "native-base";
import { DetailScreenRouteProp } from "navigation/MainTabScreens/TabTypes";
import { IMAGES_SHOES } from "../../../assets/images";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeInterface } from "screens/HomeScreen/HomeTypes";
import {
  HomeAddCart,
  HomeFulfilled,
  homeState,
} from "screens/HomeScreen/HomeSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { id, name, type, price, inStock, uri, status, description } =
    route.params.productItem;
  const dispatch = useAppDispatch();
  const { favorites }: HomeInterface = useAppSelector<HomeInterface>(homeState);

  return (
    <ScrollView>
      <Box alignItems="center">
        <Box
          mx="5"
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
          <Box>
            <AspectRatio ratio={10 / 10} height={"400"}>
              <Center>
                <Image
                  source={IMAGES_SHOES[id]}
                  alt={name}
                  resizeMode="contain"
                />
              </Center>
            </AspectRatio>
          </Box>
          <VStack space={3}>
            <Stack py="1" px="4" space={3}>
              <Text
                fontSize={18}
                fontWeight="400"
                _light={{
                  color: "#5B9EE1",
                }}
                _dark={{
                  color: "#5B9EE1",
                }}
              >
                {status}
              </Text>
              <Text
                fontSize={28}
                fontWeight="500"
                _light={{
                  color: "#1A2530",
                }}
                _dark={{
                  color: "#1A2530",
                }}
              >
                {name}
              </Text>
            </Stack>
          </VStack>
          <HStack>
            <Stack
              w="1/2"
              py="1"
              px="4"
              space={3}
              justifyContent="space-between"
            >
              <Text
                fontSize={14}
                fontWeight="500"
                _light={{
                  color: "#707B81",
                }}
                _dark={{
                  color: "#707B81",
                }}
              >
                Price
              </Text>
              <Text
                fontSize={20}
                fontWeight="500"
                _light={{
                  color: "red.500",
                }}
                _dark={{
                  color: "red.500",
                }}
              >
                ${price}.00
              </Text>
            </Stack>
            <Stack
              w="1/2"
              py="1"
              px="4"
              space={3}
              alignSelf="center"
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
            </Stack>
          </HStack>
          <VStack>
            <Stack w="full" py="1" px="4" space={3}>
              {inStock ? (
                <Button
                  bgColor="#5B9EE1"
                  variant="solid"
                  onPress={() =>
                    dispatch(
                      HomeAddCart({
                        product: route.params.productItem,
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add Cart
                </Button>
              ) : (
                <Button bgColor="black" variant="ghost" isDisabled>
                  Sold Out
                </Button>
              )}
            </Stack>
            <Stack w="100%" py="4" px="4" space={3}>
              <Text
                fontSize={14}
                fontWeight="400"
                _light={{
                  color: "#1A2530",
                }}
                _dark={{
                  color: "#707B81",
                }}
              >
                {description}
              </Text>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DetailScreen;
