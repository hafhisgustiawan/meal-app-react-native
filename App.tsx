import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./src/screens/CategoriesScreen";

SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator({
  initialRouteName: "Categories",
  screens: {
    Categories: {
      screen: CategoriesScreen,
      options: {
        title: "Coba Dulu Bang Mantep",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

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

  /**
   * Jadi awalnya kalo tanpa react navigation ini kita harus wrap container ini dengan <SafeAreaView></SaveAreaView> agar tidak tertimpa oleh notch atas dan bawah hp, intinya biar aman view nya gak ketimpa
   *
   * Tapi kalo udah pake react navigation ini udah otomatis pake safe area dari package yang di install barengan (baca dokumentasi) yaitu react-native-safe-area-context
   */

  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Poppins_800ExtraBold",
  },
});
