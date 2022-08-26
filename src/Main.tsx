import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
// import HomeComponent from "components/HomeComponent";
import RepoComponent from "components/RepoComponent/RepoComponent";

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RepoComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Main;
