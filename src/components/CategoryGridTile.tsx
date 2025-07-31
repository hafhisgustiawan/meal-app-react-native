import { View, Text, StyleSheet, Pressable } from "react-native";
import type Category from "../../models/category";

const CategoryGridTile: React.FC<Category> = ({ id, color, title }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.item}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    margin: 8,
  },
});

export default CategoryGridTile;
