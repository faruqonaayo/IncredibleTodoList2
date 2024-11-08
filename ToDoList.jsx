import React from "react";
import { Pressable, View, Text, ScrollView } from "react-native";
import styles from "./Styles";

export default function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((t, i) => (
        <Pressable>
          <View>
            <Text key={i} style={styles.taskText}>
              {t}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
