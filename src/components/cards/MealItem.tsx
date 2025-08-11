import { Pressable, Text, StyleSheet } from "react-native";
import Meal from "../../../models/meal";
import Colors from "../../utils/colors";

const MealItem: React.FC<Meal> = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    /**
     * flex: 1 di sini tidak akan membuat height nya take over available space ya, jadi akan auto fit content, untuk set height bisa pake height: <value> atau pake aspectRatio
     */
    flex: 1,
    padding: 16,
    /**
     * kalo mau set border wajib set borderWidth nya gengs
     */
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.gray300,
  },
  pressed: {
    backgroundColor: Colors.primary30,
  },
});

export default MealItem;
