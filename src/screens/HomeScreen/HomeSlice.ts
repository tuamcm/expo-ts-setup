import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProcessStatus } from "app/common/types";
import { ICart } from "services/db";
import { RootState } from "../../app/store";
import { HomeInterface, ReducerName } from "./HomeTypes";

const initialState: HomeInterface = {
  loading: ProcessStatus.idle,
  error: null,
  favorites: [],
  cart: [],
};

const HomeSlice = createSlice({
  name: ReducerName,
  initialState,
  reducers: {
    HomeFulfilled: (state, action: PayloadAction<number>) => {
      state.loading = ProcessStatus.idle;
      if (state.favorites.includes(action.payload)) {
        const newArray = state.favorites.filter(function (value, index, arr) {
          return value != action.payload;
        });
        state.favorites = newArray;
      } else {
        state.favorites.push(action.payload);
      }
    },
    HomeAddCart: (state, action: PayloadAction<ICart>) => {
      const checkExist = state.cart.filter(
        (item) => item.product.id == action.payload.product.id
      );
      if (checkExist.length > 0) {
        const newArray = state.cart.map((item, index) => {
          const _id = action.payload.product.id;
          const _quantity = action.payload.quantity;
          if (item.product.id == _id) {
            item.quantity = item.quantity + _quantity;
            return item;
          }
          return item;
        });
        state.cart = newArray;
      } else {
        state.cart.push(action.payload);
      }
    },
    HomeClearAllCart: (state) => {
      state.cart = [];
    },
    HomeCartQuantityIncrement: (state, action: PayloadAction<ICart>) => {
      const newArray = state.cart.map((item, index) => {
        const _id = action.payload.product.id;
        if (item.product.id == _id) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
      state.cart = newArray;
    },
    HomeCartQuantityDecrement: (state, action: PayloadAction<ICart>) => {
      let renewCart: ICart[] = [];
      state.cart.forEach((item) => {
        const _id = action.payload.product.id;
        if (item.product.id == _id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            renewCart.push(item);
          }
        } else {
          renewCart.push(item);
        }
      });
      state.cart = renewCart;
    },
  },
});

// Actions
export const {
  HomeFulfilled,
  HomeAddCart,
  HomeClearAllCart,
  HomeCartQuantityIncrement,
  HomeCartQuantityDecrement,
} = HomeSlice.actions;

// Selectors
export const homeState = (state: RootState) => state.home;

// Reducer
export default HomeSlice.reducer;
