import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

/**
To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.

More complex, selectable example below.

- By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes.
- keyExtractor tells the list to use the ids for the react keys instead of the default key property.
 */

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 1, // Height of the separator line
        width: "100%", // Full width of the list
        backgroundColor: "#CED0CE", // Color of the separator
      }}
    />
  );
};

const CategoriesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryGridTile {...item} />}
        keyExtractor={(el) => el.id}
        numColumns={2} //default 1
        // untuk list dengan grid, pake prop numColumns, mantaap kalo di java harus set linearLayout nya
        // ItemSeparatorComponent={ItemSeparator} //ini untuk separator yang akan memisahkan tiap rendered item, tapi kayaknya dia cuma vertical aja sih bisanya
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
