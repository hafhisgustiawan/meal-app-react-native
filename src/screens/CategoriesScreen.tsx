import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "..";

type Props = NativeStackScreenProps<ScreenParamList, "MealOverview">;

// const ItemSeparator = () => {
//   return (
//     <View
//       style={{
//         height: 1, // Height of the separator line
//         width: "100%", // Full width of the list
//         backgroundColor: "#CED0CE", // Color of the separator
//       }}
//     />
//   );
// };

/**
 * setiap component yang di registrasikan di createNativeStackNavigator akan membawa props {navigation, route} untuk bernavigasi (navigation.navigate('<path-name>')) dan membaca data yang di kirim di route  (route.param) ini seperti intent di android
 *
 * Tapi sekarang untuk navigasi kita bisa pake hook useNavigation dari '@react-navigation/native' seperti dibawah ini
 */

const CategoriesScreen: React.FC<Props> = () => {
  /**
   * Approach 1 : kita bisa pake props.navigation untuk bernavigasi ke halaman lain, minus nya props ini hanya akan didistribusikan di component yang terdaftar di createNativeStackNavigator() function
   *
   * Approach 2 : pake useNavigation hook ajaah, semua component bisa pakai walaupun tidak ter-registrasi di navigator
   */
  const navigation = useNavigation();

  const pressHandler = (id: string) => {
    /**
     * untuk type ini harus di set global declare dulu, cek src/index.d.ts
     */
    navigation.navigate("MealOverview", { id });
  };

  /**
    * To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.

    * More complex, selectable example below.

    * By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes.
    * keyExtractor tells the list to use the ids for the react keys instead of the default key property.
  */

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES} //data ini array atau array of object harusnya, karena data ini yang akan di mapping di renderItem dibawah
        renderItem={({ item }) => (
          <CategoryGridTile {...item} onPress={() => pressHandler(item.id)} />
        )}
        keyExtractor={(el) => el.id}
        numColumns={2} //default 1
        /**
         * untuk list dengan grid, pake prop numColumns, mantaap kalo di java harus set linearLayout nya
         *
         * ItemSeparatorComponent={ItemSeparator} //ini untuk separator yang akan memisahkan tiap rendered item, tapi kayaknya dia cuma vertical aja sih bisanya
         */
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
