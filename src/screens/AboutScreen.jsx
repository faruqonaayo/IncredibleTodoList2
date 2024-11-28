import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen() {
  return (
    <MainLayout>
      <Text style={styles.titleText}>App Name : Incredible Todo List</Text>
      <Text style={styles.titleText}>My Name: Faruq Ogunkunle</Text>
      <Text style={styles.titleText}>
        Today's Date: {new Date().toISOString().split("T")[0]}
      </Text>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
});
