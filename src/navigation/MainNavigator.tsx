import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import {FC} from "react";

import {ChooseDate, ChooseService} from "@/screens";
import Home from "@/screens/Home/Home";

import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  ChooseService: undefined;
  ChooseDate: {barber: string; services: string[]};
  Home: undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChooseService" component={ChooseService} />
      <Stack.Screen name="ChooseDate" component={ChooseDate} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
