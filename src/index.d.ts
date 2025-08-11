import { RootStack } from "../App";

/**
 * Sebenarnya kita bisa pake yang dibawah ini :
 *
 * import type { StaticParamList } from "@react-navigation/native";
 * type RootStackParamList = StaticParamList<typeof RootStack>;
 *
 * untuk infer type dari createNativeStackNavigator tapi dia gak bisa detect params nya, jadinya kita pake cara manual seperti dibawah ini
 */
export type ScreenParamList = {
  Categories: undefined;
  MealOverview: { id: string; title: string };
};

/**
 * Dengan begini, useNavigation atau useRoute sudah type save
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}
