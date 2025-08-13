import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
  Platform,
} from "react-native";
import Meal from "../../../models/meal";
import Colors from "../../utils/colors";

const MealItem: React.FC<Meal> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <View style={styles.textCotainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
          {title}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{duration}m</Text>
          <Text style={styles.descriptionText}>{complexity}</Text>
          <Text style={styles.descriptionText}>{affordability}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    /**
     * flex: 1 di sini tidak akan membuat height nya take over available space ya, jadi akan auto fit content, untuk set height bisa pake height: <value> atau pake aspectRatio
     */
    flex: 1,
    flexDirection: "row",
    /**
     * alignItems describes how to align children along the cross axis of their container. It is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis.
     *
     * stretch (default value) Stretch children of a container to match the height of the container's cross axis.
     */
    alignItems: "center",
    gap: 16,
    padding: 16,
    /**
     * kalo mau set border wajib set borderWidth nya gengs
     */
    // borderWidth: 1,
    // borderColor: Colors.gray300,
    backgroundColor: "white",
    borderRadius: 8,
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 8,
      },
    }),
  },
  textCotainer: {
    flex: 1,
    /**
     * pake height: '100%' karena parent nya pake alignItems: 'center', kalo gini child nya gak auto grow
     */
    height: "100%",
  },
  descriptionContainer: {
    flex: 1,
    gap: "2",
    justifyContent: "flex-end",
  },
  titleText: {
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 10,
    color: Colors.gray500,
  },
  /**
   * Di React Native, <Image /> tidak langsung mendukung shadow, jadi biasanya kita membungkusnya dengan <View> yang punya style shadow.
   */
  image: {
    width: 72,
    aspectRatio: 1 / 1,
    borderRadius: 8,
    backgroundColor: Colors.gray500,
  },
  pressed: {
    backgroundColor: Colors.primary30,
    opacity: 0.7,
  },
});

export default MealItem;
