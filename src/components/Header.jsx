import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.headerText}>Welcome!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red",
  },
});
