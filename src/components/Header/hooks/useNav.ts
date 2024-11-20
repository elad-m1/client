import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToBadge = () => navigation.navigate("Badge");

  return {goToBadge};
};

export default useNav;
