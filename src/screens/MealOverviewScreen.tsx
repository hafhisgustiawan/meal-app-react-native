import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { ScreenParamList } from "..";

type Props = NativeStackScreenProps<ScreenParamList, "MealOverview">;

const MealOverviewScreen: React.FC<Props> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>MealOverview with id: {route.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export default MealOverviewScreen;
