import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store";
import { NativeBaseProvider, Box } from "native-base";
import Main from "Main";
import { LogBox } from 'react-native';
// Ignore log notification by message:
LogBox.ignoreLogs(['Constants.platform.ios.model has been deprecated']);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Main />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
