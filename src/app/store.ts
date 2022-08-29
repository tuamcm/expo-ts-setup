import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
  devTools: true, // default
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
