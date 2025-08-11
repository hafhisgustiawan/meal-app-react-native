import { View, Text, StyleSheet, Pressable } from "react-native";
import type Category from "../../../models/category";
import type { RouteProp } from "@react-navigation/native";
import { ScreenParamList } from "../..";

type TRoute = RouteProp<ScreenParamList, "MealOverview">;

interface IProps extends Category {
  onPress: () => void;
  route: TRoute;
}

const CategoryGridTile: React.FC<IProps> = ({
  id,
  color,
  title,
  onPress,
  route,
}) => {
  /**
   * props.route
   *
   * untuk component ini, kita coba passing route dari screen component yang menjadi parent nya
   *
   * untuk props.route ini di provide oleh react navigation, jadi tiap screen component yang ter-daftar di createNativeStackNavigator() akan menerima props ini
   *
   * down side nya, props.route ini hanya akan di provide untuk parent component aja. Sedangkan untuk child nya (nested component) tidak akan di provide jika tidak di passing dari parent nya
   *
   * solusinya kalo case seperti ini pake useRoute
   *
   * useRoute is a hook which gives access to route object. It's useful when you cannot pass down the route object from props to the component, or don't want to pass it in case of a deeply nested child.
   *
   * useRoute() returns the route object of the screen it's inside.
   */

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.item, pressed && styles.buttonPressed]}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /**
     * flexDirection disini akan otomatis column
     * Fungsi alignItems di React Native (dan juga di Flexbox CSS) adalah untuk mengatur posisi elemen anak di sepanjang cross axis (sumbu silang) dari container flex.
     * Kalau flexDirection: 'column' → alignItems mengatur horizontal (kiri/kanan)
     * Kalau flexDirection: 'row' → alignItems mengatur vertikal (atas/bawah)
     * Jika set flex: 1 maka default alignItems: 'stretch'
     */
    aspectRatio: 1 / 1,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 8,
    borderRadius: 16,
    /**
     * elevation
     * seperti di xml android, jadi ini akan memunculkan efek shadow
     * hanya ter-implementasikan di android saja
     */
    elevation: 4,
    backgroundColor: "white",
    /**
     * shadow*** dibawah
     * berikut adalah untuk set shadow di ios
     * tapi pastikan set backgroundColor kalo gak dia gak muncul
     * hanya ter-implementasikan di ios saja
     */
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default CategoryGridTile;
