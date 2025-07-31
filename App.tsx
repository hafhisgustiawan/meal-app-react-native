import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
