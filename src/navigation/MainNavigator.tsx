import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import {FC} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {
  Checkout,
  ChooseDate,
  ChooseService,
  EditProfile,
  Rank,
  TermsConditions
} from "@/screens";

import AuthNavigator from "./AuthNavigator";
import BottomNavigator from "./BottomNavigator/BottomNavigator";

const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  Auth: undefined;
  BottomNav: undefined;
  ChooseService: undefined;
  ChooseDate: {barber: string; services: string[]};
  Checkout: undefined;
  Rank: undefined;
  TermsConditions: undefined;
  EditProfile: undefined;
};

export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;

const MainNavigator: FC = () => {
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Stack.Navigator
        initialRouteName="BottomNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="BottomNav" component={BottomNavigator} />
        <Stack.Screen name="ChooseDate" component={ChooseDate} />
        <Stack.Screen name="ChooseService" component={ChooseService} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen
          name="Rank"
          component={Rank}
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            gestureEnabled: true,
            animationMatchesGesture: true
          }}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
