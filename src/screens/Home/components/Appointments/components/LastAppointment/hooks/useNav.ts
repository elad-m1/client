import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToChooseDate = () =>
    navigation.navigate("ChooseDate", {
      barber: "יואב אורלב",
      services: ["תספורת לגבר"]
    });
  return {goToChooseDate};
};

export default useNav;
