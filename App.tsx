import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/store";
import { StyleSheet, View, Text } from "react-native";
import Main from "Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading PersistGate ...</Text>} persistor={persistor}>
        <View style={styles.container}>
          <Main />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
