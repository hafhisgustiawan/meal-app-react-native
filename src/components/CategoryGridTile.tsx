import { View, Text, StyleSheet, Pressable } from "react-native";
import type Category from "../../models/category";

interface IProps extends Category {
  onPress: () => void;
}

const CategoryGridTile: React.FC<IProps> = ({ id, color, title, onPress }) => {
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
     * Jika alignItems: 'strect' maka child akan take semua space yang ada
     */
    alignItems: "stretch",
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
