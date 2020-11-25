import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const initialTodoTitle = "новая задача";
const buttonTitle = "отправить";

export const AddTodo = ({ onSubmit }) => {
  const [currentTodo, setCurrentTodo] = useState(null);

  const onClick = () => {
    onSubmit(currentTodo || initialTodoTitle);
    setCurrentTodo(null);
  };

  return (
    <View style={styles.block}>
      <TextInput
        onChangeText={(text) => setCurrentTodo(text)}
        value={currentTodo}
        placeholder={"Введите текст"}
      />
      <Button title={buttonTitle} onPress={onClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
