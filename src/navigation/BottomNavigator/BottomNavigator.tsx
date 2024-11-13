import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTranslation} from "react-i18next";

import Home from "@/screens/Home/Home";

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const {t} = useTranslation();
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{title: t("bottom_nav.home")}}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
