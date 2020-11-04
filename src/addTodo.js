import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const addTodo = (props) => {
  return (
    <View style={styles.block}>
      <TextInput />
      <Button title="добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "conter",
  },
  input: {
    widtborh: "70%",
    borderStyle: "solid ",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
