import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import { store } from "app/store";
import Main from "Main";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
