import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export const AddTodo = ({ onSubmit }) => {

  const pressHandler = () => {
    onSubmit("Test todo");
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alighItems: "center",
    marginBottom: 15
  },

  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },


});
