import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import {FC} from "react";

import {ChooseDate, ChooseService, Product} from "@/screens";

import AuthNavigator from "./AuthNavigator";
import BottomNavigator from "./BottomNavigator/BottomNavigator";

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  Auth: undefined;
  BottomNav: undefined;
  ChooseService: undefined;
  ChooseDate: {barber: string; services: string[]};
  Product: {id: string};
};

export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="BottomNav" component={BottomNavigator} />
      <Stack.Screen name="ChooseDate" component={ChooseDate} />
      <Stack.Screen name="ChooseService" component={ChooseService} />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{animation: "slide_from_bottom"}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
