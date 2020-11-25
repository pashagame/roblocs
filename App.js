import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  //setTodos(todos.concat([ newTodo ]))
  //setTodos((prevTodos) => {
  // return [...prevTodos],
  //  newTodo
  // });
  // };

  console.log("todos", todos);

  return (
    <View style={styles.rootContainer}>
      <Navbar title="Todo app!" />
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        <AddTodo onSubmit={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 50,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
