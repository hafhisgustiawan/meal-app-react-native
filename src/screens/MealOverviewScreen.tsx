import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";

import MealItem from "../components/cards/MealItem";
import { ScreenParamList } from "..";
import { MEALS } from "../../data/dummy-data";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<ScreenParamList, "MealOverview">;

const MealOverviewScreen: React.FC<Props> = ({ route }) => {
  const { id, title } = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenParamList, "MealOverview">>();
  useEffect(() => {
    navigation.setOptions({
      title,
      headerBackTitle: "Back",
    });
  }, [navigation]);

  const meals = MEALS.filter((el) => el.categoryIds.includes(id));

  return (
    <FlatList
      style={styles.container}
      data={meals}
      keyExtractor={(el) => el.id}
      renderItem={({ item: meal }) => <MealItem {...meal} />}
      contentContainerStyle={styles.listContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  listContainerStyle: {
    gap: 16,
  },
});

export default MealOverviewScreen;
