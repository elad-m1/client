import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTranslation} from "react-i18next";

import {Profile, Shop} from "@/screens";
import Home from "@/screens/Home/Home";
import {scale} from "@/utils/sizing";

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const {t} = useTranslation();
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
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
