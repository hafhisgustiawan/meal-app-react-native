import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_400Regular,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
  (Text as any).defaultProps.style = { fontFamily: "Poppins_400Regular" };

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
    fontFamily: "Poppins_800ExtraBold",
  },
});
