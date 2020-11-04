import React from "react";
import { View, StayleSheet, TextInput, Button } from "react-native";

export const addTodo = (props) => {
  return (
    <View style={styles.block}>
      <TextInput />
      <button title="добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    widtborh: "70%",
    borderStyle: "solid ",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
