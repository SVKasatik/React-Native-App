import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    borderColor: "#eee",
    alignItems: "center",
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
  },

  text: {
    color: "#fff",
    fontSize: "3vh",
    fontWeight: "600",
  },
});
