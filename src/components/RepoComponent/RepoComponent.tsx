import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableHighlight,
} from "react-native";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RepoPending, UpdateSearchText, repoState } from "./repoSlice";
import { ProcessStatus } from "app/common/types";
import { RepoInterface } from "./repoTypes";

const renderItem: ListRenderItem<string> = ({ item, index, separators }) => {
  return (
    <TouchableHighlight
      key={index}
      onPress={() => console.log(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
      style={{ margin: 5, padding: 20, backgroundColor: "#cdcdcd" }}
    >
      <View>
        <Text style={{ fontSize: 20, color: "blue" }}>{item}</Text>
      </View>
    </TouchableHighlight>
  );
};

const RepoComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loading, data, error, searchText }: RepoInterface =
    useAppSelector<RepoInterface>(repoState);
  const [text, setText] = useState<string>(searchText || "");

  const handleOnPress = (): void => {
    dispatch(UpdateSearchText(text));
    dispatch(RepoPending(text));
  };

  const onRefresh = (): void => {
    dispatch(UpdateSearchText(text));
    dispatch(RepoPending(text));
  };

  return (
    <View style={styles.con}>
      <Text>The title</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Text>{loading === ProcessStatus.pending ? "Loading..." : "NO"}</Text>
      <Button title="Press me" onPress={handleOnPress} />
      <FlatList
        style={{ backgroundColor: "#adadad" }}
        data={data}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={loading === ProcessStatus.pending ? true : false}
        ListEmptyComponent={<Text>Not Found SSS</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RepoComponent;
