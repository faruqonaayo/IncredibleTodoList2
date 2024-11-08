import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./Styles";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => {
          setTaskText(text);
        }}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(taskText);
          setTaskText("");
        }}
      />
    </View>
  );
}
