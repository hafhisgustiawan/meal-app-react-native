// import type { StaticParamList } from "@react-navigation/native";
import { RootStack } from "../App";

// type RootStackParamList = StaticParamList<typeof RootStack>;

export type ScreenParamList = {
  Categories: undefined;
  MealOverview: { id: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}
