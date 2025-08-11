import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealOverviewScreen from "./src/screens/MealOverviewScreen";

/**
 * ini untuk prevent splash screen nya mati ketika awal load
 */
SplashScreen.preventAutoHideAsync();

/**
 * This navigator uses the native APIs UINavigationController on iOS and Fragment on Android so that navigation built with createNativeStackNavigator will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using react-native-web.
 *
 * Jadi createNativeStackNavigator ini sudah implement toolbar dan titlenya bisa kita set di options, untuk pindah2 halaman juga udah implement fragment (android) dan UINavigationController (ios)
 *
 * Untuk styling atau setting header, kita bisa pake properti options di dalam properti screen atau kalo mau global bisa pake screenOptions seperti dibawah ini
 */
const RootStack = createNativeStackNavigator({
  initialRouteName: "Categories",
  screenOptions: {
    headerStyle: {
      backgroundColor: "brown",
    },
    /**
     * Set tint color for title and back button
     */
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  screens: {
    Categories: {
      screen: CategoriesScreen,
      options: {
        title: "Categories List",
      },
    },
    MealOverview: MealOverviewScreen,
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
   * SafeAreaView disini berfungsi agar view tidak tertutup dibagian bawah aja, karena bagaian atas sudah pake createNativeStackNavigator, kecuali kita juga pake createBottomTabNavigation
   *
   * Jadi awalnya kalo tanpa react navigation ini kita harus wrap container ini dengan <SafeAreaView></SaveAreaView> agar tidak tertimpa oleh notch atas dan bawah hp, intinya biar aman view nya gak ketimpa
   *
   * Tapi kalo udah pake react navigation ini udah otomatis pake safe area dari package yang di install barengan (baca dokumentasi) yaitu react-native-safe-area-context
   */

  return (
    <View style={styles.container}>
      {/**
       * SafeAreaView
       *
       * SaveAreaView yang atas akan dibuat flex: 0 agar mencakup bagian atas saja, disini kita bisa melakukan custom style yang berbeda, antara atas dan bawah
       *
       * SaveAreaView yang atas akan dibuat flex: 1 agar mencakup seluruh bagian di layar
       */}
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    fontFamily: "Poppins_800ExtraBold",
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: "brown",
  },
});
