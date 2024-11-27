import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {IconButton, Text} from "@/components";
import {ThemeContext} from "@/context";
import {ChooseService, Profile, Shop} from "@/screens";
import Home from "@/screens/Home/Home";
import {scale} from "@/utils/sizing";

import {MainNavigationProp} from "../MainNavigator";

const BottomTabs = createBottomTabNavigator();

export type BottomTabsParamList = {
  ChooseService: undefined;
  Home: undefined;
  Shop: undefined;
  Profile: undefined;
};

export type BottomTabsNavProp = BottomTabNavigationProp<BottomTabsParamList>;

const BottomNavigator = () => {
  const {colors} = useContext(ThemeContext);
  const navigation = useNavigation<MainNavigationProp>();

  const {t} = useTranslation();
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <BottomTabs.Screen
        name="GoesToChooseService"
        component={() => null}
        options={{
          title: t("bottom_nav.make_apt"),
          tabBarButton: () => (
            <IconButton
              icon="plus"
              mode="contained"
              onPress={() => navigation.navigate("ChooseService")}
              elevation={false}
              size={scale(14)}
              color={colors.onPrimary}
              style={{
                backgroundColor: colors.primary,
                alignSelf: "center",
                marginTop: scale(4)
              }}
            />
          )
        }}
      />
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: t("bottom_nav.home"),
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesomeIcon
              // @ts-ignore
              icon="fa-regular fa-calendar-plus"
              color={color}
              size={size}
            />
          )
        }}
      />
      <BottomTabs.Screen
        name="Shop"
        component={Shop}
        options={{
          title: t("bottom_nav.shop"),
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesomeIcon icon="cart-shopping" color={color} size={size} />
          )
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("bottom_nav.profile"),
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesomeIcon icon="gear" color={color} size={size} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
