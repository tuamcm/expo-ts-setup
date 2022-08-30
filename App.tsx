import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store";
import { Text } from "react-native";
import Main from "Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading PersistGate ...</Text>}
        persistor={persistor}
      >
        <Main />
      </PersistGate>
    </Provider>
  );
}
